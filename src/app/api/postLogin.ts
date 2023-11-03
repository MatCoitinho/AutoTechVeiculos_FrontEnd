import api from "@/lib/api";
import { formToJSON } from "axios";
import { error } from "console";




interface LoginResponse {
    token: string;
    user: {
      id: string,
      name: string,
      email: string,
      phone: string,
      cpf: string,
      address: string,
      is_supperUser: boolean
    }
}


export async function loginResquest(email:String, password: String):Promise<LoginResponse | null> {
    
    try{
        const res = await api.post('/login/logar/', {email, password})
        if(res.status === 200){
            alert('Logado')
            return res.data
        } else if(res.status === 400){
            alert('Não autorizado')
        }
    } catch(error){
        console.error(error)
        alert('Erro ao logar')
    }
    return null
}