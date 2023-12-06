import { userResquest } from '@/app/api/PostLoginClient';
import { getCliente } from '@/app/api/getCliente';
import { loginResquest } from '@/app/api/postLogin';
import { parseSetCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import {setCookie, parseCookies } from 'nookies'
import { getUserData } from '@/lib/auth' 


type signinRequestData = {
    email: String;
    password: String;
}

export async function signinRequest(data: signinRequestData){
   
    try{
        const status = await loginResquest(data.email, data.password)

        if(!status?.token) {
            alert('erro')
            return
        }
            
        const token = getToken(data.email) 
        
        if(token){
            const user = {
                id: status.user.id,
                name: status.user.name,
                email: status.user.email,
                phone: status.user.phone,
                cpf: status.user.cpf,
                address: status.user.address,
                is_supperUser: status.user.is_supperUser
              };
            return {
                token,
                user
            }
        }
        
        return status
    } catch (error){
        console.log("ocorreu um erro")
    }
}


   

function getToken(email: String){
    const {'AutoTech_token': token} = parseCookies()
    if(token)
        return token
}

export async function recoverUserInformation(){
    let email = localStorage.getItem('@autotech:user')
    let vaule = email?.replace(/["/]/g, '');
    
    return vaule
}
