import { parseSetCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import {setCookie, parseCookies } from 'nookies'

type signinRequestData = {
    email: String;
    password: String;
}

export function signinRequest(data: signinRequestData){
    if(data.email !== 'joao@a.com' && data.password !== 'bah')
        return null
        if(getToken()){
            console.log('get Token')
            return{
                token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
                user: {
                    id: '1',
                    name: 'joao',
                    email: 'joao@a.com',
                    phone: '44997171020',
                    cpf: '12345678910',
                    address: 'souza Navez'
                }
            }
        }


    return{
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
            id: '1',
            name: 'joao',
            email: 'joao@a.com',
            phone: '44997171020',
            cpf: '12345678910',
            address: 'souza Navez'
        }
    }
}

function getToken(){
    const {'AutoTech_token': token} = parseCookies()
    if(token)
        return recoverUserInformation().then()

}

export async function recoverUserInformation(){


        return{ 
                
                    id: '1',
                    name: 'joao',
                    email: 'joao@a.com',
                    phone: '44997171020',
                    cpf: '12345678910',
                    address: 'souza Navez'
                 
            }
}