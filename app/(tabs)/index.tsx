import { LogoutButton } from '@/components/logout-button';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useAuth } from '@/contexts/AuthContext';
import { getDashboardSummary, getRecentActivity } from '@/services/admin';
import { ActivityItem, DashboardSummary } from '@/types/models';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dashboard() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];
  const { user, updatePhoto } = useAuth();
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingPhoto, setUpdatingPhoto] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const [summaryData, recent] = await Promise.all([
          getDashboardSummary(),
          getRecentActivity(),
        ]);
        if (!isMounted) return;
        setSummary(summaryData);
        setActivity(recent);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const handlePickProfilePhoto = async () => {
    setUpdatingPhoto(true);
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permission.status !== 'granted') {
        setUpdatingPhoto(false);
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
        allowsEditing: true,
        aspect: [1, 1],
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        await updatePhoto(uri);
      }
    } catch (error) {
      // silently ignore for now
    } finally {
      setUpdatingPhoto(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <TouchableOpacity
              style={styles.profileImage}
              onPress={handlePickProfilePhoto}
              activeOpacity={0.85}
            >
              {user?.photoUrl ? (
                <Image source={{ uri: user.photoUrl }} style={styles.profileImage} />
              ) : (
                <Ionicons name={updatingPhoto ? 'cloud-upload' : 'person'} size={24} color={c.text} />
              )}
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Dashboard</Text>
          </View>
          <LogoutButton />
        </View>

        {/* Overview Section */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.overviewGrid}>
          <View style={styles.overviewCard}>
            <Text style={styles.cardTitle}>Total Properties</Text>
            <Text style={styles.cardNumber}>
              {summary ? summary.totalProperties : loading ? '—' : '0'}
            </Text>
          </View>
          <View style={styles.overviewCard}>
            <Text style={styles.cardTitle}>Occupied Units</Text>
            <Text style={styles.cardNumber}>
              {summary ? summary.occupiedUnits : loading ? '—' : '0'}
            </Text>
          </View>
          <View style={[styles.overviewCard, styles.fullWidthCard]}>
            <Text style={styles.cardTitle}>Pending Applications</Text>
            <Text style={styles.cardNumber}>
              {summary ? summary.pendingApplications : loading ? '—' : '0'}
            </Text>
          </View>
        </View>

        {/* Financial Summary */}
        <Text style={styles.sectionTitle}>Financial Summary</Text>
        <View style={styles.financialGrid}>
          <View style={styles.financialCard}>
            <Text style={styles.cardTitle}>Total Rent Collected</Text>
            <Text style={styles.financialAmount}>
              {summary
                ? `$${summary.totalRentCollected.toLocaleString()}`
                : loading
                ? '—'
                : '$0'}
            </Text>
          </View>
          <View style={styles.financialCard}>
            <Text style={styles.cardTitle}>Outstanding Balance</Text>
            <Text style={styles.financialAmount}>
              {summary
                ? `$${summary.outstandingBalance.toLocaleString()}`
                : loading
                ? '—'
                : '$0'}
            </Text>
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          {activity.length ? (
            activity.map(item => (
              <View key={item.id} style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Ionicons name="home" size={20} color={c.text} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>{item.title}</Text>
                  <Text style={styles.activitySubtext}>{item.subtitle}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.activitySubtext}>
              {loading ? 'Loading activity...' : 'No recent activity yet.'}
            </Text>
          )}
        </View>

        {/* Tenant Ratings */}
        <Text style={styles.sectionTitle}>Tenant Ratings</Text>
        <View style={styles.ratingItem}>
          <View style={styles.ratingProfile}>
            <View style={styles.ratingImage}>
              <Ionicons name="person" size={20} color={c.text} />
            </View>
            <View style={styles.ratingContent}>
              <Text style={styles.ratingText}>No tenants to rate yet</Text>
              <Text style={styles.ratingSubtext}>
                {summary && summary.occupiedUnits === 0
                  ? 'Add tenants to start collecting ratings.'
                  : 'Ratings coming soon.'}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.ratingButton}>
            <Ionicons name="star-outline" size={20} color={c.text} />
          </TouchableOpacity>
        </View>

      </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7F8F9' },
  container: { flex: 1, backgroundColor: '#F7F8F9' },
  content: { padding: 20, paddingBottom: 40 },
  header: { marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  profileSection: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E0E0E0', alignItems: 'center', justifyContent: 'center', marginRight: 12, overflow: 'hidden' },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#000' },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginTop: 24, marginBottom: 16, color: '#000' },
  overviewGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  overviewCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, width: '48%', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  fullWidthCard: { width: '100%' },
  cardTitle: { fontSize: 14, color: '#666', marginBottom: 8 },
  cardNumber: { fontSize: 32, fontWeight: '700', color: '#000' },
  financialGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  financialCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, width: '48%', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  financialAmount: { fontSize: 24, fontWeight: '700', color: '#000', marginTop: 8 },
  activityList: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  activityItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  activityIcon: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#F0F0F0', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  activityContent: { flex: 1 },
  activityText: { fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 4 },
  activitySubtext: { fontSize: 14, color: '#007AFF' },
  ratingItem: { backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  ratingProfile: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  ratingImage: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E0E0E0', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  ratingContent: { flex: 1 },
  ratingText: { fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 4 },
  ratingSubtext: { fontSize: 14, color: '#666' },
  ratingButton: { padding: 8 },
});
