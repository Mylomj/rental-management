import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

// ✅ Optional: use a secure logging method (no passwords)
const safeLog = (message: string, data?: any) => {
  console.log(message, data ? '[data hidden for security]' : '');
};

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing info', 'Please enter both email and password.');
      return;
    }

    try {
      safeLog('Attempting login for:', email);

      // Mock successful login
      setTimeout(() => {
        const isAdmin = password.trim() === '1111';
        Alert.alert(
          'Success',
          isAdmin ? 'Admin access granted (demo mode)' : 'Logged in successfully (demo mode)'
        );
        router.replace((isAdmin ? '/(tabs)' : '/(client-tabs)') as any);// navigate to dashboard
      }, 800);
    } catch (error) {
      Alert.alert('Login failed', 'Please check your credentials.');
      safeLog('Login error:', error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 60}
      >
        <ScrollView
          contentContainerStyle={styles.inner}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.subtitle}>
            Enter your credentials to access your account.
          </Text>

          <View style={styles.card}>
            <Text style={styles.fieldLabel}>Email address</Text>
            <TextInput
              placeholder="you@example.com"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#9AA3A8"
            />

            <View style={styles.passwordRow}>
              <Text style={styles.fieldLabel}>Password</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.forgot}>Forgot?</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              placeholderTextColor="#9AA3A8"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerWrap}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8F9',
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 6,
  },
  subtitle: {
    color: '#7B8790',
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F0F2F4',
  },
  fieldLabel: {
    color: '#6F7579',
    marginBottom: 8,
    fontSize: 13,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#EEF0F2',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgot: {
    color: Colors.light.tint,
    fontWeight: '600',
  },
  button: {
    marginTop: 6,
    backgroundColor: Colors.light.tint,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footerWrap: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    color: '#8C9498',
  },
  signUp: {
    color: Colors.light.tint,
    fontWeight: '600',
  },
});
