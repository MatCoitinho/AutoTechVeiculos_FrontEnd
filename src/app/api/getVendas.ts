import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Venda =  {
    id: Number,
    nome_comprador: String,
    cpf_comprador: String,
    data: String,
    modelo: String,
    cor: String,
    valor: Number,
    contato: String
}


export async function getVendas(busca: string): Promise<AxiosResponse<Venda[]> | undefined> {
    try{
        const res = await api.get(`/vender/Venda/${busca}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
