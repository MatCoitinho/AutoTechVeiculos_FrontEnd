'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import auth, { ISignInCredentials, Response } from "../lib/auth";

interface AuthContextData {
  signed: boolean;
  user: Response['user'] | null;
  signIn: (props: ISignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (props: Omit<Response['user'], 'id'>) => Promise<boolean>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Response['user'] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem("@autotech:user");
      const storagedToken = localStorage.getItem("@autotech:token");

      if (storagedUser && storagedToken) {
        // get user data from api
        const response = await auth.getUserData(storagedUser);
        setUser(response.user);
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  async function signIn(props: ISignInCredentials) {
    const response = await auth.signIn(props);
    setUser(response.user);
    localStorage.setItem("@autotech:user", JSON.stringify(response.user.id));
    localStorage.setItem("@autotech:token", response.token);
  }

  async function updateUser(props: Omit<Response['user'], 'id'>) {
    const storagedUser = localStorage.getItem("@autotech:user");
    if (storagedUser) {
      const response = await auth.getUserData(storagedUser);
      setUser(response.user);
      return true;
    }
    return false;
  }
  
  return (
    <AuthContext.Provider value={{ 
      signed: !!user, 
      user, 
      loading,
      signIn,
      signOut,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}