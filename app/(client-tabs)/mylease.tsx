import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ClientLease() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ThemedView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Lease</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Property</Text>
          <Text style={styles.value}>456 Oak Ave, Apt 2A</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Lease Dates</Text>
          <Text style={styles.value}>Aug 15, 2023 → Aug 14, 2024</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Monthly Rent</Text>
          <Text style={styles.value}>$1,500</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Landlord</Text>
          <Text style={styles.value}>Harper Realty Group</Text>
          <Text style={styles.subValue}>support@harperrealty.com</Text>
          <Text style={styles.subValue}>+1 (555) 123-7890</Text>
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
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20, color: '#0E1114' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  label: { fontSize: 14, color: '#6B7280', textTransform: 'uppercase', marginBottom: 6 },
  value: { fontSize: 18, fontWeight: '600', color: '#111' },
  subValue: { fontSize: 15, color: '#4B5563', marginTop: 4 },
  divider: { height: 1, backgroundColor: '#EEF2F5', marginVertical: 12 },
});

