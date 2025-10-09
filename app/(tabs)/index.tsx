import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Dashboard() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.profileImage}>
              <Ionicons name="person" size={24} color={c.text} />
            </View>
            <Text style={styles.headerTitle}>Dashboard</Text>
          </View>
        </View>

        {/* Overview Section */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.overviewGrid}>
          <View style={styles.overviewCard}>
            <Text style={styles.cardTitle}>Total Properties</Text>
            <Text style={styles.cardNumber}>5</Text>
          </View>
          <View style={styles.overviewCard}>
            <Text style={styles.cardTitle}>Occupied Units</Text>
            <Text style={styles.cardNumber}>4</Text>
          </View>
          <View style={[styles.overviewCard, styles.fullWidthCard]}>
            <Text style={styles.cardTitle}>Pending Applications</Text>
            <Text style={styles.cardNumber}>2</Text>
          </View>
        </View>

        {/* Financial Summary */}
        <Text style={styles.sectionTitle}>Financial Summary</Text>
        <View style={styles.financialGrid}>
          <View style={styles.financialCard}>
            <Text style={styles.cardTitle}>Total Rent Collected</Text>
            <Text style={styles.financialAmount}>$12,500</Text>
          </View>
          <View style={styles.financialCard}>
            <Text style={styles.cardTitle}>Outstanding Balance</Text>
            <Text style={styles.financialAmount}>$1,200</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Ionicons name="home" size={20} color={c.text} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityText}>Lease signed with Ethan Harper</Text>
              <Text style={styles.activitySubtext}>123 Main St</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Ionicons name="home" size={20} color={c.text} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityText}>Application received from Riley...</Text>
              <Text style={styles.activitySubtext}>456 Oak Ave</Text>
            </View>
          </View>
        </View>

        {/* Tenant Ratings */}
        <Text style={styles.sectionTitle}>Tenant Ratings</Text>
        <View style={styles.ratingItem}>
          <View style={styles.ratingProfile}>
            <View style={styles.ratingImage}>
              <Ionicons name="person" size={20} color={c.text} />
            </View>
            <View style={styles.ratingContent}>
              <Text style={styles.ratingText}>Rate Ethan Harper</Text>
              <Text style={styles.ratingSubtext}>Tenancy ended on 2024-01-15</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.ratingButton}>
            <Ionicons name="star-outline" size={20} color={c.text} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8F9' },
  content: { padding: 20, paddingBottom: 40 },
  header: { marginBottom: 20 },
  profileSection: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E0E0E0', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
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
