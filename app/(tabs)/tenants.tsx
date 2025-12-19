import { LogoutButton } from '@/components/logout-button';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { getTenants } from '@/services/admin';
import { TenantSummary } from '@/types/models';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tenants() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];
  const [tenants, setTenants] = useState<TenantSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const data = await getTenants();
        if (!isMounted) return;
        setTenants(data);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tenants</Text>
          <LogoutButton />
        </View>

        {/* Tenants List */}
        <View style={styles.tenantsList}>
          {tenants.length ? (
            tenants.map((tenant) => (
              <TouchableOpacity key={tenant.id} style={styles.tenantCard}>
                <View style={styles.tenantAvatar}>
                  <Text style={styles.avatarText}>👤</Text>
                </View>
                <View style={styles.tenantInfo}>
                  <Text style={styles.tenantName}>{tenant.name}</Text>
                  <Text style={styles.tenantAddress}>{tenant.address}</Text>
                </View>
                <TouchableOpacity style={styles.tenantArrow}>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.emptyText}>
              {loading ? 'Loading tenants...' : 'No tenants yet.'}
            </Text>
          )}
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
  tenantsList: { gap: 12 },
  tenantCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  tenantAvatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#E0E0E0', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  avatarText: { fontSize: 24 },
  tenantInfo: { flex: 1 },
  tenantName: { fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 4 },
  tenantAddress: { fontSize: 14, color: '#666' },
  tenantArrow: { padding: 8 },
  emptyText: { fontSize: 14, color: '#666' },
});

