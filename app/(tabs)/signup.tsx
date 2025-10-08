import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword || !name) {
      console.log('Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    // later this will connect to Firebase Auth
    console.log('Signing up user:', { name, email });
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
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Fill in your details to get started</Text>

          <View style={styles.card}>
          <Text style={styles.fieldLabel}>Full Name</Text>
          <TextInput
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#9AA3A8"
          />

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

          <Text style={styles.fieldLabel}>Password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholderTextColor="#9AA3A8"
          />

          <Text style={styles.fieldLabel}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholderTextColor="#9AA3A8"
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ marginBottom: 10 }}
          >
            <Text style={styles.togglePassword}>
              {showPassword ? 'Hide Passwords' : 'Show Passwords'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSignUp} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.footerWrap}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.signUp}>Log In</Text>
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
    fontSize: 32,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 6,
  },
  subtitle: {
    color: '#7B8790',
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
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
  togglePassword: {
    color: Colors.light.tint,
    fontWeight: '600',
    textAlign: 'right',
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
