import { LogoutButton } from '@/components/logout-button';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Reports() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];
  const [activeView, setActiveView] = useState<'overview' | 'tax'>('overview');

  useFocusEffect(
    useCallback(() => {
      setActiveView('overview');
    }, [])
  );

  const reportCategories = [
    {
      id: 1,
      title: 'Financial Reports',
      description: 'Revenue, expenses, and profit analysis',
      icon: 'trending-up',
      color: '#28A745'
    },
    {
      id: 2,
      title: 'Occupancy Reports',
      description: 'Property occupancy rates and trends',
      icon: 'home',
      color: '#007AFF'
    },
    {
      id: 3,
      title: 'Maintenance Reports',
      description: 'Property maintenance and repair costs',
      icon: 'construct',
      color: '#FFC107'
    },
    {
      id: 4,
      title: 'Tenant Reports',
      description: 'Tenant satisfaction and retention rates',
      icon: 'people',
      color: '#6F42C1'
    },
    {
      id: 5,
      title: 'Application Reports',
      description: 'Application trends and approval rates',
      icon: 'document-text',
      color: '#17A2B8'
    }
  ];

  const taxSummary = [
    { icon: 'cash-outline', label: 'Total Rental Income', value: '$24,000' },
    { icon: 'receipt-outline', label: 'Total Expenses', value: '$8,000' },
    { icon: 'trending-up-outline', label: 'Net Income', value: '$16,000' },
    { icon: 'percent-outline', label: 'Tax Deductions', value: '$2,000' },
  ];

  const taxView = (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.detailHeader}>
          <TouchableOpacity style={styles.backButton} onPress={() => setActiveView('overview')}>
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>
          <Text style={styles.detailTitle}>Tax Reporting</Text>
          <LogoutButton />
        </View>

        <Text style={styles.sectionTitle}>Report Filters</Text>
        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>Property</Text>
          <TouchableOpacity style={styles.inputField}>
            <Text style={styles.inputPlaceholder}>All Properties</Text>
            <Ionicons name="chevron-down" size={18} color="#94A3B8" />
          </TouchableOpacity>

          <Text style={[styles.detailLabel, { marginTop: 16 }]}>Date Range</Text>
          <TouchableOpacity style={styles.inputField}>
            <Text style={styles.inputPlaceholder}>Jan 1, 2024 - Dec 31, 2024</Text>
            <Ionicons name="chevron-down" size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Report Summary</Text>
        <View style={styles.detailCard}>
          {taxSummary.map((item) => (
            <View key={item.label} style={styles.summaryRow}>
              <View style={styles.summaryIcon}>
                <IconSymbol name={item.icon as any} size={22} color={c.text} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.summaryLabel}>{item.label}</Text>
                <Text style={styles.summaryValue}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Actions</Text>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Generate Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryBtnText}>Export Report</Text>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );

  const overviewView = (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Reports</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="filter" size={20} color="#000" />
            </TouchableOpacity>
            <LogoutButton />
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Quick Overview</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>$45,200</Text>
              <Text style={styles.statLabel}>Total Revenue</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>92%</Text>
              <Text style={styles.statLabel}>Occupancy Rate</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>4.8</Text>
              <Text style={styles.statLabel}>Avg Rating</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>15</Text>
              <Text style={styles.statLabel}>Active Tenants</Text>
            </View>
          </View>
        </View>

        {/* Report Categories */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Report Categories</Text>
          <View style={styles.categoriesList}>
            {reportCategories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <View style={[styles.categoryIcon, { backgroundColor: category.color + '20' }]}>
                  <Ionicons name={category.icon as any} size={24} color={category.color} />
                </View>
                <View style={styles.categoryInfo}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                  <Text style={styles.categoryDescription}>{category.description}</Text>
                </View>
                <TouchableOpacity style={styles.categoryArrow}>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tax Reporting Shortcut */}
        <TouchableOpacity style={styles.taxEntry} onPress={() => setActiveView('tax')}>
          <View style={[styles.categoryIcon, { backgroundColor: '#0B5FFF20' }]}>
            <Ionicons name="document-text" size={24} color="#0B5FFF" />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryTitle}>Tax Reporting</Text>
            <Text style={styles.categoryDescription}>
              Generate year-end taxable income summaries
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>

      </ScrollView>
    </ThemedView>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {activeView === 'tax' ? taxView : overviewView}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7F8F9' },
  container: { flex: 1, backgroundColor: '#F7F8F9' },
  content: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#000' },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#000', marginBottom: 16 },
  statsSection: { marginBottom: 32 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  statCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, width: '48%', marginBottom: 12, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  statNumber: { fontSize: 20, fontWeight: '700', color: '#000', marginBottom: 4 },
  statLabel: { fontSize: 12, color: '#666', textAlign: 'center' },
  categoriesSection: { marginBottom: 32 },
  categoriesList: { gap: 12 },
  categoryCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  categoryIcon: { width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  categoryInfo: { flex: 1 },
  categoryTitle: { fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 4 },
  categoryDescription: { fontSize: 14, color: '#666' },
  categoryArrow: { padding: 8 },
  recentSection: { marginBottom: 20 },
  recentList: { gap: 12 },
  recentItem: { backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  recentIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F0F0F0', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  recentInfo: { flex: 1 },
  recentTitle: { fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 4 },
  recentDate: { fontSize: 14, color: '#666' },
  downloadButton: { padding: 8 },
  taxEntry: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailTitle: { fontSize: 22, fontWeight: '700', color: '#0F172A' },
  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  detailLabel: { fontSize: 14, fontWeight: '600', color: '#111827', marginBottom: 6 },
  inputField: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputPlaceholder: { fontSize: 15, color: '#64748B' },
  summaryRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  summaryIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EEF2F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  summaryLabel: { fontSize: 15, fontWeight: '600', color: '#111827' },
  summaryValue: { fontSize: 15, color: '#2563EB', marginTop: 4 },
  primaryBtn: {
    backgroundColor: '#0B5FFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  secondaryBtn: {
    backgroundColor: '#E4E8F2',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryBtnText: { color: '#111827', fontSize: 16, fontWeight: '600' },
});

