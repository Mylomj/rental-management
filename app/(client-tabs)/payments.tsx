import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const payments = [
  { id: '1', label: 'July Rent', due: 'Due Jul 1, 2024', amount: '$1,500', status: 'Upcoming' },
  { id: '2', label: 'June Rent', due: 'Paid Jun 1, 2024', amount: '$1,500', status: 'Paid' },
  { id: '3', label: 'May Rent', due: 'Paid May 1, 2024', amount: '$1,500', status: 'Paid' },
];

export default function ClientPayments() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ThemedView style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}>Payments</Text>
        <FlatList
          data={payments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.subtitle}>{item.due}</Text>
              </View>
              <View style={styles.amountWrap}>
                <Text style={styles.amount}>{item.amount}</Text>
                <Text style={[styles.status, item.status === 'Paid' && styles.paid]}>
                  {item.status}
                </Text>
              </View>
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
  title: { fontSize: 24, fontWeight: '700', marginBottom: 16, color: '#0E1114' },
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
  amountWrap: { alignItems: 'flex-end' },
  amount: { fontSize: 18, fontWeight: '700', color: '#111' },
  status: { marginTop: 4, fontSize: 14, color: '#EAB308', fontWeight: '600' },
  paid: { color: '#16A34A' },
});

