import { createContext } from "vm";
import { signinRequest } from "./login";
import {setCookie } from 'nookies'
import { useState } from "react";
import { boolean, number, string } from "zod";
import Router from "next/router";
import { Route } from "lucide-react";

export interface Response {
    token: string;
    user: {
      id: string,
      name: string,
      email: string,
      phone: string,
      cpf: string,
      address: string
    };
  }
  //const [user, setUser] = useState<User|null>( null )

  export interface ISignInCredentials {
    email: string;
    password: string;
  }



async function  signIn({email, password}: ISignInCredentials){
    const user = signinRequest({
        email,
        password
    }) 
      if(user?.token){
        setCookie(undefined, 'AutoTech_token', user.token, {maxAge: 600} )
        return user;
      } 
}

function getUserData(id: string): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
            id: '1',
            name: 'joao',
            email: 'joao@a.com',
            phone: '44997171020',
            cpf: '12345678910',
            address: 'souza Navez'
        }
    });
    }, 2000);
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { signIn, getUserData };