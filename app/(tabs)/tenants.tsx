import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Tenants() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];

  const tenants = [
    {
      id: 1,
      name: 'Sarah Miller',
      address: '123 Main St, Apt 2B',
      avatar: '👩'
    },
    {
      id: 2,
      name: 'David Lee',
      address: '456 Oak Ave, House',
      avatar: '👨'
    },
    {
      id: 3,
      name: 'Emily Chen',
      address: '789 Pine Ln, Unit 3',
      avatar: '👩'
    },
    {
      id: 4,
      name: 'Michael Brown',
      address: '101 Elm Rd, Apt 1A',
      avatar: '👨'
    },
    {
      id: 5,
      name: 'Jessica Davis',
      address: '222 Maple Dr, House',
      avatar: '👩'
    }
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tenants</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Tenants List */}
        <View style={styles.tenantsList}>
          {tenants.map((tenant) => (
            <TouchableOpacity key={tenant.id} style={styles.tenantCard}>
              <View style={styles.tenantAvatar}>
                <Text style={styles.avatarText}>{tenant.avatar}</Text>
              </View>
              <View style={styles.tenantInfo}>
                <Text style={styles.tenantName}>{tenant.name}</Text>
                <Text style={styles.tenantAddress}>{tenant.address}</Text>
              </View>
              <TouchableOpacity style={styles.tenantArrow}>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8F9' },
  content: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  menuButton: { padding: 8 },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#000' },
  placeholder: { width: 40 },
  tenantsList: { gap: 12 },
  tenantCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  tenantAvatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#E0E0E0', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  avatarText: { fontSize: 24 },
  tenantInfo: { flex: 1 },
  tenantName: { fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 4 },
  tenantAddress: { fontSize: 14, color: '#666' },
  tenantArrow: { padding: 8 },
});
