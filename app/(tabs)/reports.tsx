import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Reports() {
  const colorScheme = 'light';
  const c = Colors[colorScheme];

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

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Reports</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={20} color="#000" />
          </TouchableOpacity>
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

        {/* Recent Reports */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Reports</Text>
          <View style={styles.recentList}>
            <View style={styles.recentItem}>
              <View style={styles.recentIcon}>
                <Ionicons name="document" size={20} color="#007AFF" />
              </View>
              <View style={styles.recentInfo}>
                <Text style={styles.recentTitle}>Monthly Financial Report</Text>
                <Text style={styles.recentDate}>Generated on Dec 15, 2024</Text>
              </View>
              <TouchableOpacity style={styles.downloadButton}>
                <Ionicons name="download" size={20} color="#007AFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.recentItem}>
              <View style={styles.recentIcon}>
                <Ionicons name="bar-chart" size={20} color="#28A745" />
              </View>
              <View style={styles.recentInfo}>
                <Text style={styles.recentTitle}>Occupancy Analysis</Text>
                <Text style={styles.recentDate}>Generated on Dec 10, 2024</Text>
              </View>
              <TouchableOpacity style={styles.downloadButton}>
                <Ionicons name="download" size={20} color="#28A745" />
              </TouchableOpacity>
            </View>
          </View>
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
  filterButton: { padding: 8 },
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
});
