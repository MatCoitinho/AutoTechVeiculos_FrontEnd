import api from "@/lib/api";
import { formToJSON } from "axios";
import { error } from "console";




interface Response {
    
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


export async function userResquest(email:String):Promise<Response| null> {
    try{
        const res = await api.post('/login/retrieve/', email)
        if(res.status === 200){
            return res.data
        } else {
            throw new Error(`API returned status ${res.status}`);
        }
    } catch(error){
        console.error('erro', error)
    }
    return null
}
