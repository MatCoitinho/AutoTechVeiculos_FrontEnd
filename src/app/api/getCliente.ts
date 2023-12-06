import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Cliente = {
    id: number;
    cliente_email: string;
    cliente_firstName: string;
    cliente_lastName: string;
    cpf: string;
    telefone: string;
    endereco: string;
    user: number;
}



export async function getCliente(busca: string): Promise<AxiosResponse<Cliente[]> | undefined> {
    try{
        const res = await api.get(`/login/Cliente/${busca}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
