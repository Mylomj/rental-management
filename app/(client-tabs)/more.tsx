import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const options = [
  { id: '1', label: 'Profile' },
  { id: '2', label: 'Documents' },
  { id: '3', label: 'Support' },
  { id: '4', label: 'Sign Out' },
];

export default function ClientMore() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ThemedView style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}>More</Text>
        <View style={styles.card}>
          {options.map((option, index) => (
            <React.Fragment key={option.id}>
              <Pressable style={styles.option}>
                <Text style={styles.optionText}>{option.label}</Text>
              </Pressable>
              {index < options.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </View>
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  option: { paddingVertical: 16 },
  optionText: { fontSize: 16, fontWeight: '500', color: '#111' },
  divider: { height: 1, backgroundColor: '#EEF2F5' },
});

