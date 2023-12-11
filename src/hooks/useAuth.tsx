'use client';
import {setCookie, parseCookies, destroyCookie } from 'nookies'
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import auth, { ISignInCredentials, Response } from "../lib/auth";
import {recoverUserInformation} from '../lib/login'

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
      const {'AutoTech_token': token, 'Admim_autoTech_token': tokenAdmin} = parseCookies()

      const storagedUser =  JSON.stringify( await recoverUserInformation())
      let storagedToken
      if(tokenAdmin)
        storagedToken = tokenAdmin
      if(token)
        storagedToken = token
      if (storagedUser && storagedToken) {
        // get user data from api
        const response = await auth.getUserData(storagedUser);
        console.log('Response')
        console.log(response)
        if(response?.user){
          
          setUser(response.user);
        }
        
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signOut() {
    localStorage.clear();
    destroyCookie(null, 'AutoTech_token')
    destroyCookie(null, 'Admim_autoTech_token')
    setUser(null);
  }

  async function signIn(props: ISignInCredentials) {
    if(!props) return 

    const response = await auth.signIn(props);
    if(response){
      setUser(response.user);
      localStorage.setItem("@autotech:user", JSON.stringify(response.user.email));
      localStorage.setItem("@autotech:token", response.token);
    }
  }

  async function updateUser(props: Omit<Response['user'], 'id'>) {
    const storagedUser = localStorage.getItem("@autotech:user");
    if (storagedUser) {
      const response = await auth.getUserData(storagedUser);
      if(response?.user){
        setUser(response.user);
      }
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