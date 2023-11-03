import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Veiculo = {
    id: number;
    tipoCombustivel: string;
    model: string;
    marca: string;
    ano: string;
    cambio: boolean;
    categoria: string;
    qtdPortas: number;
    dono_cpf: string;
    placa: string;
    quilometragem: string;
    status: boolean;
    cor: string;
    modelo: number;
    dono: number;
}


export async function getVeiculo(busca: string): Promise<AxiosResponse<Veiculo[]> | undefined> {
    try{
        const res = await api.get(`/anunciar/Veiculo/${busca}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
