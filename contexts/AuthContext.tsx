import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import * as authService from '@/services/auth';
import { User } from '@/types/models';

type LoginArgs = {
  email: string;
  password: string;
};

type AuthState = {
  user: User | null;
  isBootstrapping: boolean;
  login: (args: LoginArgs) => Promise<User>;
  logout: () => Promise<void>;
  updatePhoto: (photoUrl: string | null) => Promise<User | null>;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    (async () => {
      const existing = await authService.getCurrentUser();
      setUser(existing);
      setIsBootstrapping(false);
    })();
  }, []);

  const login = async (args: LoginArgs) => {
    const loggedIn = await authService.login(args);
    setUser(loggedIn);
    return loggedIn;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const updatePhoto = async (photoUrl: string | null) => {
    const updated = await authService.updateUserProfilePhoto(photoUrl);
    if (updated) {
      setUser(updated);
    }
    return updated;
  };

  return (
    <AuthContext.Provider value={{ user, isBootstrapping, login, logout, updatePhoto }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}


