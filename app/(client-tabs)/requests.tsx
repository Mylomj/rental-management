import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const requests = [
  { id: '1', title: 'Leaky Faucet', status: 'In Progress', date: 'Submitted Jun 10, 2024' },
  { id: '2', title: 'AC Maintenance', status: 'Scheduled', date: 'Submitted May 22, 2024' },
];

export default function ClientRequests() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ThemedView style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}>Requests</Text>
        <TouchableOpacity style={styles.newBtn}>
          <Text style={styles.newBtnText}>+ New Request</Text>
        </TouchableOpacity>

        <FlatList
          data={requests}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.label}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.date}</Text>
              </View>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7F8F9' },
  container: { flex: 1, backgroundColor: '#F7F8F9' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12, color: '#0E1114' },
  newBtn: {
    backgroundColor: '#111827',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  newBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  label: { fontSize: 16, fontWeight: '600', color: '#111' },
  subtitle: { color: '#6B7280', marginTop: 4 },
  status: { fontSize: 14, fontWeight: '600', color: '#2563EB' },
});

