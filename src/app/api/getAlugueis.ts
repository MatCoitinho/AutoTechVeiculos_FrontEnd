import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Aluguel = {
    id: number;
    cliente_email: string;
    cliente_firstName: string;
    cliente_lastName: string;
    cpf: string;
    telefone: string;
    endereco: string;
    tipoCombustivel: string;
    model: string;
    marca: string;
    ano: string;
    cambio: boolean;
    categoria: string;
    qtdPortas: string;
    placa: string;
    dataInicio: string;
    dataDev: string;
    cliente: number;
    veiculo: number;
}


export async function getAluguel(busca: string): Promise<AxiosResponse<Aluguel[]> | undefined> {
    try{
        const res = await api.get(`/alugar/Alugar/${busca}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
