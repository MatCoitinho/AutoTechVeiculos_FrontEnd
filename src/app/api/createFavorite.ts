import { string } from 'zod'
import api from '../../lib/api'

type favorito = {
    email: String;
    modelo: String;
    marca: String;
    ano: String;
}


export async function createFavorito(data: favorito) {
    try{
        const res = await api.post('/listaDesejos/adicionarDesejo/', data)
     
        if (res.status === 200) {
            console.log('Cliente criado')
            return res.data;
        }
 
    } catch(error){
        console.log(error)
    }
}