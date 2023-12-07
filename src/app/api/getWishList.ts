import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Venda =  {
    id: Number,
    modelo: String,
    marca: String,
    ano: String,
}

export async function getFavoritos(email: string): Promise<AxiosResponse<Venda[]> | undefined> {
    try{
        const res = await api.get(`/vender/Venda/${email}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
