import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Properties() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop',
      status: 'Occupied',
      address: '123 Main St, Apt 2B',
      statusColor: '#28A745'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop',
      status: 'Vacant',
      address: '456 Oak Ave, House',
      statusColor: '#FFC107'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop',
      status: 'Occupied',
      address: '789 Pine Ln, Condo',
      statusColor: '#28A745'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=200&fit=crop',
      status: 'Vacant',
      address: '101 Elm Rd, Duplex',
      statusColor: '#FFC107'
    }
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Properties</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Properties List */}
        <View style={styles.propertiesList}>
          {properties.map((property) => (
            <TouchableOpacity key={property.id} style={styles.propertyCard}>
              <View style={styles.propertyImageContainer}>
                <Image source={{ uri: property.image }} style={styles.propertyImage} />
              </View>
              <View style={styles.propertyInfo}>
                <Text style={[styles.propertyStatus, { color: property.statusColor }]}>
                  {property.status}
                </Text>
                <Text style={styles.propertyAddress}>{property.address}</Text>
              </View>
              <TouchableOpacity style={styles.propertyArrow}>
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
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#000' },
  addButton: { backgroundColor: '#000', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  propertiesList: { gap: 16 },
  propertyCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  propertyImageContainer: { marginRight: 16 },
  propertyImage: { width: 60, height: 60, borderRadius: 8 },
  propertyInfo: { flex: 1 },
  propertyStatus: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  propertyAddress: { fontSize: 14, color: '#666' },
  propertyArrow: { padding: 8 },
});
