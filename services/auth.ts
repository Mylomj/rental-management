import AsyncStorage from '@react-native-async-storage/async-storage';

import { mockAdminUser, mockTenantUser } from '@/mocks/data';
import { User } from '@/types/models';
import { simulateNetwork } from './api';

const STORAGE_KEY = 'auth:user';

type LoginParams = {
  email: string;
  password: string;
};

export async function login(params: LoginParams): Promise<User> {
  const isAdmin =
    params.email.toLowerCase() === 'milton@gmail.com' &&
    params.password === 'admin1';

  const user = isAdmin ? mockAdminUser : mockTenantUser;

  const resolvedUser = await simulateNetwork(user, 600);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(resolvedUser));

  return resolvedUser;
}

export async function getCurrentUser(): Promise<User | null> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

export async function logout(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}

export async function updateUserProfilePhoto(photoUrl: string | null): Promise<User | null> {
  const existing = await getCurrentUser();
  if (!existing) return null;

  const updated: User = { ...existing, photoUrl };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}


