import { LogoutButton } from '@/components/logout-button';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { getProperties } from '@/services/admin';
import { Property } from '@/types/models';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Properties() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const data = await getProperties();
        if (!isMounted) return;
        setProperties(data);
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
          <Text style={styles.headerTitle}>Properties</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
            <LogoutButton />
          </View>
        </View>

        {/* Properties List */}
        <View style={styles.propertiesList}>
          {properties.length ? (
            properties.map((property) => {
              const statusLabel =
                property.status === 'occupied' ? 'Occupied' : 'Vacant';
              const statusColor =
                property.status === 'occupied' ? '#28A745' : '#FFC107';

              return (
                <TouchableOpacity key={property.id} style={styles.propertyCard}>
                  {property.imageUrl && (
                    <View style={styles.propertyImageContainer}>
                      <Image source={{ uri: property.imageUrl }} style={styles.propertyImage} />
                    </View>
                  )}
                  <View style={styles.propertyInfo}>
                    <Text style={[styles.propertyStatus, { color: statusColor }]}>
                      {statusLabel}
                    </Text>
                    <Text style={styles.propertyAddress}>
                      {property.address}
                      {property.unitLabel ? `, ${property.unitLabel}` : ''}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.propertyArrow}>
                    <Ionicons name="chevron-forward" size={20} color="#666" />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text style={styles.emptyText}>
              {loading ? 'Loading properties...' : 'No properties found.'}
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
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#000' },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  addButton: { backgroundColor: '#000', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  propertiesList: { gap: 16 },
  propertyCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  propertyImageContainer: { marginRight: 16 },
  propertyImage: { width: 60, height: 60, borderRadius: 8 },
  propertyInfo: { flex: 1 },
  propertyStatus: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  propertyAddress: { fontSize: 14, color: '#666' },
  propertyArrow: { padding: 8 },
  emptyText: { fontSize: 14, color: '#666' },
});

