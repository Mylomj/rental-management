import { LogoutButton } from '@/components/logout-button';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Applicants() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];

  const applicants = [
    {
      id: 1,
      name: 'Sarah Miller',
      address: '123 Main St',
      status: 'Pending',
      statusColor: '#FFC107',
      avatar: '👩'
    },
    {
      id: 2,
      name: 'David Lee',
      address: '456 Oak Ave',
      status: 'Approved',
      statusColor: '#28A745',
      avatar: '👨'
    },
    {
      id: 3,
      name: 'Emily Chen',
      address: '789 Pine Ln',
      status: 'Rejected',
      statusColor: '#DC3545',
      avatar: '👩'
    },
    {
      id: 4,
      name: 'Michael Brown',
      address: '101 Elm Rd',
      status: 'Pending',
      statusColor: '#FFC107',
      avatar: '👨'
    },
    {
      id: 5,
      name: 'Jessica Davis',
      address: '222 Maple Dr',
      status: 'Approved',
      statusColor: '#28A745',
      avatar: '👩'
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ThemedView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Applicants</Text>
          <LogoutButton />
        </View>

        {/* Applicants List */}
        <View style={styles.applicantsList}>
          {applicants.map((applicant) => (
            <TouchableOpacity key={applicant.id} style={styles.applicantCard}>
              <View style={styles.applicantAvatar}>
                <Text style={styles.avatarText}>{applicant.avatar}</Text>
              </View>
              <View style={styles.applicantInfo}>
                <Text style={styles.applicantName}>{applicant.name}</Text>
                <Text style={styles.applicantAddress}>{applicant.address}</Text>
              </View>
              <View style={styles.applicantStatus}>
                <Text style={[styles.statusText, { color: applicant.statusColor }]}>
                  {applicant.status}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  menuButton: { padding: 8 },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#000' },
  applicantsList: { gap: 12 },
  applicantCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  applicantAvatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#E0E0E0', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  avatarText: { fontSize: 24 },
  applicantInfo: { flex: 1 },
  applicantName: { fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 4 },
  applicantAddress: { fontSize: 14, color: '#666' },
  applicantStatus: { alignItems: 'flex-end' },
  statusText: { fontSize: 14, fontWeight: '600' },
});

