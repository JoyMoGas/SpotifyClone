import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface UserData {
  username: string;
  favorites: string[];
}

interface AuthContextType {
  currentUser: string | null;
  login: (username: string) => void;
  logout: () => void;
  getUserFavorites: () => string[];
  setUserFavorites: (favorites: string[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'spotify_clone_users';
const CURRENT_USER_KEY = 'spotify_clone_current_user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  const getAllUsers = (): Record<string, UserData> => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  };

  const saveAllUsers = (users: Record<string, UserData>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  };

  const login = (username: string) => {
    const trimmedUsername = username.trim();
    if (!trimmedUsername) return;

    const users = getAllUsers();
    
    if (!users[trimmedUsername]) {
      users[trimmedUsername] = {
        username: trimmedUsername,
        favorites: []
      };
      saveAllUsers(users);
    }

    setCurrentUser(trimmedUsername);
    localStorage.setItem(CURRENT_USER_KEY, trimmedUsername);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  const getUserFavorites = (): string[] => {
    if (!currentUser) return [];
    
    const users = getAllUsers();
    return users[currentUser]?.favorites || [];
  };

  const setUserFavorites = (favorites: string[]) => {
    if (!currentUser) return;

    const users = getAllUsers();
    if (users[currentUser]) {
      users[currentUser].favorites = favorites;
      saveAllUsers(users);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        getUserFavorites,
        setUserFavorites
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
