import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TenantDash() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Dashboard</Text>

        <Text style={styles.sectionTitle}>Lease Details</Text>

        <View style={styles.row}>
          <View style={styles.iconBox}>
            <IconSymbol name="house.fill" size={22} color={c.text} />
          </View>
          <View style={styles.col}>
            <Text style={styles.rowTitle}>Apartment Address</Text>
            <Text style={styles.rowSubtitle}>456 Oak Ave, Apt 2A</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconBox}>
            <IconSymbol name="chevron.left.forwardslash.chevron.right" size={22} color={c.text} />
          </View>
          <View style={styles.col}>
            <Text style={styles.rowTitle}>Lease Term</Text>
            <Text style={styles.rowSubtitle}>August 15, 2023 - August 14, 2024</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconBox}>
            <IconSymbol name="card" size={22} color={c.text} />
          </View>
          <View style={styles.col}>
            <Text style={styles.rowTitle}>Rent Amount</Text>
            <Text style={styles.rowSubtitle}>$1,500/month</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Upcoming Payments</Text>

        <View style={[styles.row, styles.paymentRow]}>
          <View style={styles.iconBox}>
            <IconSymbol name="card" size={22} color={c.text} />
          </View>
          <View style={styles.col}>
            <Text style={styles.rowTitle}>July Rent</Text>
            <Text style={styles.rowSubtitle}>Due on July 1, 2024</Text>
          </View>
          <Text style={styles.paymentAmount}>$1,500</Text>
        </View>

        <Text style={styles.sectionTitle}>Maintenance Requests</Text>

        <View style={styles.row}>
          <View style={styles.iconBox}>
            <IconSymbol name="wrench" size={22} color={c.text} />
          </View>
          <View style={styles.col}>
            <Text style={styles.rowTitle}>Leaky Faucet</Text>
            <Text style={styles.rowSubtitle}>Submitted June 10, 2024</Text>
          </View>
          <View style={styles.statusDot} />
        </View>

        <Text style={styles.sectionTitle}>Rate Your Landlord & Property</Text>

        <View style={styles.row}>
          <View style={styles.iconBox}>
            <IconSymbol name="chevron.right" size={22} color={c.text} />
          </View>
          <View style={styles.col}>
            <Text style={styles.rowTitle}>Rate Landlord</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconBox}>
            <IconSymbol name="house.fill" size={22} color={c.text} />
          </View>
          <View style={styles.col}>
            <Text style={styles.rowTitle}>Rate Property</Text>
          </View>
        </View>

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8F9' },
  content: { padding: 20, paddingBottom: 40 },
  header: { fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 22, fontWeight: '700', marginTop: 18, marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  iconBox: { width: 52, height: 52, borderRadius: 10, backgroundColor: '#EEF2F5', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  col: { flex: 1 },
  rowTitle: { fontSize: 16, fontWeight: '600' },
  rowSubtitle: { color: '#5E7287', marginTop: 4 },
  paymentRow: { alignItems: 'center' },
  paymentAmount: { fontSize: 18, fontWeight: '600' },
  statusDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#28A745', marginLeft: 8 },
});