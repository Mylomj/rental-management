import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const avatarUri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop';

export default function ClientDashboard() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ThemedView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarWrap}>
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          </View>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <Ionicons name="notifications-outline" size={22} color="#1C1C1E" />
        </View>

        {/* Lease Details */}
        <Text style={styles.sectionTitle}>Lease Details</Text>
        <View style={styles.card}>
          <DetailRow
            icon="house.fill"
            title="Apartment Address"
            subtitle="456 Oak Ave, Apt 2A"
          />
          <DetailRow
            icon="calendar"
            title="Lease Term"
            subtitle="August 15, 2023 - August 14, 2024"
          />
          <DetailRow icon="dollarsign.circle" title="Rent Amount" subtitle="$1,500/month" />
        </View>

        {/* Payments */}
        <Text style={styles.sectionTitle}>Upcoming Payments</Text>
        <View style={styles.paymentCard}>
          <View style={styles.paymentRow}>
            <View style={styles.iconBox}>
              <IconSymbol name="creditcard" size={22} color={c.text} />
            </View>
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentTitle}>July Rent</Text>
              <Text style={styles.paymentSubtitle}>Due on July 1, 2024</Text>
            </View>
            <Text style={styles.paymentAmount}>$1,500</Text>
          </View>
        </View>

        {/* Maintenance */}
        <Text style={styles.sectionTitle}>Maintenance Requests</Text>
        <View style={styles.card}>
          <View style={[styles.row, styles.requestRow]}>
            <View style={styles.iconBox}>
              <IconSymbol name="wrench.adjustable" size={22} color={c.text} />
            </View>
            <View style={styles.col}>
              <Text style={styles.rowTitle}>Leaky Faucet</Text>
              <Text style={styles.rowSubtitle}>Submitted June 10, 2024</Text>
            </View>
            <View style={styles.statusDot} />
          </View>
        </View>

        {/* Ratings */}
        <Text style={styles.sectionTitle}>Rate Your Landlord & Property</Text>
        <View style={styles.card}>
          <RatingRow label="Rate Landlord" icon="person-circle-outline" />
          <View style={styles.divider} />
          <RatingRow label="Rate Property" icon="home-outline" />
        </View>
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

function DetailRow({ icon, title, subtitle }: { icon: any; title: string; subtitle: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.iconBox}>
        <IconSymbol name={icon} size={22} color="#111" />
      </View>
      <View style={styles.col}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

function RatingRow({ label, icon }: { label: string; icon: any }) {
  return (
    <View style={styles.ratingRow}>
      <View style={styles.ratingInfo}>
        <Ionicons name={icon} size={22} color="#111" />
        <Text style={styles.ratingLabel}>{label}</Text>
      </View>
      <Ionicons name="star-outline" size={22} color="#111" />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7F8F9' },
  container: { flex: 1, backgroundColor: '#F7F8F9' },
  content: { padding: 20, paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatarWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    overflow: 'hidden',
    backgroundColor: '#EAECEF',
  },
  avatar: { width: '100%', height: '100%' },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#111' },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginTop: 24, marginBottom: 12, color: '#111' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  requestRow: { marginBottom: 0 },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EEF2F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  col: { flex: 1 },
  rowTitle: { fontSize: 16, fontWeight: '600', color: '#111' },
  rowSubtitle: { color: '#5E7287', marginTop: 4 },
  paymentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  paymentRow: { flexDirection: 'row', alignItems: 'center' },
  paymentInfo: { flex: 1 },
  paymentTitle: { fontSize: 16, fontWeight: '600', color: '#111' },
  paymentSubtitle: { color: '#5E7287', marginTop: 4 },
  paymentAmount: { fontSize: 18, fontWeight: '700', color: '#111' },
  statusDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#28A745', marginLeft: 8 },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  ratingInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  ratingLabel: { fontSize: 16, fontWeight: '600', color: '#111' },
  divider: { height: 1, backgroundColor: '#EEF2F5', marginVertical: 8 },
});

