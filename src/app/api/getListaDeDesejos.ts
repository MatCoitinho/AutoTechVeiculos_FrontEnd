
import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Favorito =  {
    id: Number,
    modelo: String,
    marca: String,
    ano: String,
}

export async function getListaDeDesejos(email: string): Promise<AxiosResponse<Favorito[]> | undefined> {
    try{
        const res = await api.get(`listaDesejos/Desejo/?dono__user__username=${email}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
