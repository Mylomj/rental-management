import { Stack } from 'expo-router';
import React from 'react';

import { AuthProvider } from '@/contexts/AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack initialRouteName="login">
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(client-tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="tenantdash" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
