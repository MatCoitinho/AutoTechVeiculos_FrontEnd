import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Modelo = {
    id: number;
    tipoCombustivel: string;
    model: string;
    marca: string;
    ano: number;
    cambio: boolean;
    categoria: string;
    qtdPortas: number;
}


export async function getModelo(busca: string): Promise<AxiosResponse<Modelo[]> | undefined> {
    try{
        const res = await api.get(`/anunciar/Modelo/${busca}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
