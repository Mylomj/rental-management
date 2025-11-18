import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

type LogoutButtonProps = {
  style?: ViewStyle;
};

export function LogoutButton({ style }: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login' as any);
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handleLogout}
      activeOpacity={0.85}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <Ionicons name="log-out-outline" size={20} color="#111" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
});

