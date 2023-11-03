import { createContext } from "vm";
import { signinRequest } from "./login";
import {setCookie } from 'nookies'
import { useState } from "react";
import { boolean, number, string } from "zod";
import Router from "next/router";
import { Route } from "lucide-react";
import { getCliente } from "@/app/api/getCliente";
import { loginResquest } from "@/app/api/postLogin";
import { userResquest } from "@/app/api/PostLoginClient";

export interface Response {
    token: string;
    user: {
      id: string,
      name: string,
      email: string,
      phone: string,
      cpf: string,
      address: string,
      is_supperUser: boolean
    };
  }
  //const [user, setUser] = useState<User|null>( null )

  export interface ISignInCredentials {
    email: string;
    password: string;
  }



async function  signIn({email, password}: ISignInCredentials){
    const user = await signinRequest({
        email,
        password
    }) 
    
    if(user?.token){
        setCookie(undefined, 'AutoTech_token', user.token, {maxAge: 1200} )
        return user;
      } 
}

export async function getUserData(id: string): Promise<Response| undefined> {
    console.log('id')
    console.log(id)
    const usuario = await userResquest(id)
    console.log('usuario')
    console.log(usuario)
    if(usuario){
      return { 
        token: '', 
        user: usuario.user
      }
    }
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { signIn, getUserData };