import { string } from 'zod'
import api from '../../lib/api'

type cliente = {
    primeiroNome: string;
    ultimoNome: string;
    senha: string;
    email: string;
    CPF: string;
    telefone: string;
    endereco: string;
}


export async function createClient(data: cliente) {
    try{
        const res = await api.post('/login/cadastrar/', data)
     
        if (res.status === 200) {
            console.log('Cliente criado')
            return res.data;
        }
 
    } catch(error){
        console.log(error)
    }
}