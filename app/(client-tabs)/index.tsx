import { LogoutButton } from '@/components/logout-button';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { getLease, getRatings, getRequests, getUpcomingPayments } from '@/services/tenant';
import { Lease, MaintenanceRequest, Payment, Rating } from '@/types/models';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const avatarUri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop';

export default function ClientDashboard() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];
  const [lease, setLease] = useState<Lease | null>(null);
  const [upcomingPayment, setUpcomingPayment] = useState<Payment | null>(null);
  const [request, setRequest] = useState<MaintenanceRequest | null>(null);
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const [leaseData, payments, requests, ratingData] = await Promise.all([
          getLease(),
          getUpcomingPayments(),
          getRequests(),
          getRatings(),
        ]);

        if (!isMounted) return;

        setLease(leaseData);
        setUpcomingPayment(payments[0] ?? null);
        setRequest(requests[0] ?? null);
        setRatings(ratingData);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
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
          <View style={styles.avatarWrap}>
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          </View>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <LogoutButton />
        </View>

        {/* Lease Details */}
        <Text style={styles.sectionTitle}>Lease Details</Text>
        <View style={styles.card}>
          {lease ? (
            <>
              <DetailRow
                icon="house.fill"
                title="Apartment Address"
                subtitle={`${lease.propertyAddress}, ${lease.unit}`}
              />
              <DetailRow
                icon="calendar"
                title="Lease Term"
                subtitle={`${lease.startDate} - ${lease.endDate}`}
              />
              <DetailRow
                icon="dollarsign.circle"
                title="Rent Amount"
                subtitle={`$${lease.rentAmount.toLocaleString()}/month`}
              />
            </>
          ) : (
            <Text style={styles.rowSubtitle}>
              {loading ? 'Loading lease details...' : 'No lease details available.'}
            </Text>
          )}
        </View>

        {/* Payments */}
        <Text style={styles.sectionTitle}>Upcoming Payments</Text>
        <View style={styles.paymentCard}>
          {upcomingPayment ? (
            <View style={styles.paymentRow}>
              <View style={styles.iconBox}>
                <IconSymbol name="creditcard" size={22} color={c.text} />
              </View>
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentTitle}>{upcomingPayment.label}</Text>
                <Text style={styles.paymentSubtitle}>Due on {upcomingPayment.dueDate}</Text>
              </View>
              <Text style={styles.paymentAmount}>
                ${upcomingPayment.amount.toLocaleString()}
              </Text>
            </View>
          ) : (
            <Text style={styles.rowSubtitle}>
              {loading ? 'Loading payments...' : 'No upcoming payments.'}
            </Text>
          )}
        </View>

        {/* Maintenance */}
        <Text style={styles.sectionTitle}>Maintenance Requests</Text>
        <View style={styles.card}>
          {request ? (
            <View style={[styles.row, styles.requestRow]}>
              <View style={styles.iconBox}>
                <IconSymbol name="wrench.adjustable" size={22} color={c.text} />
              </View>
              <View style={styles.col}>
                <Text style={styles.rowTitle}>{request.title}</Text>
                <Text style={styles.rowSubtitle}>Submitted {request.createdAt}</Text>
              </View>
              <View style={styles.statusDot} />
            </View>
          ) : (
            <Text style={styles.rowSubtitle}>
              {loading ? 'Loading requests...' : 'No maintenance requests.'}
            </Text>
          )}
        </View>

        {/* Ratings */}
        <Text style={styles.sectionTitle}>Rate Your Landlord & Property</Text>
        <View style={styles.card}>
          {ratings.length ? (
            <>
              {ratings.map((r, index) => (
                <React.Fragment key={r.id}>
                  <RatingRow
                    label={
                      r.subject === 'landlord'
                        ? `Rate ${r.subjectName}`
                        : r.subject === 'property'
                        ? 'Rate Property'
                        : 'Rate Tenant'
                    }
                    icon={r.subject === 'property' ? 'home-outline' : 'person-circle-outline'}
                  />
                  {index < ratings.length - 1 && <View style={styles.divider} />}
                </React.Fragment>
              ))}
            </>
          ) : (
            <Text style={styles.rowSubtitle}>
              {loading ? 'Loading ratings...' : 'No rating actions available.'}
            </Text>
          )}
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

