import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Carro = {
    id: number;
    modelo: string;
    marca: string;
    cambio: boolean;
    ano: string;
    combustivel: string;
    placa: string;
    cor: string;
    categoria: string;
    status: boolean;
    dono: string;
    pontos: number;
    img1: string;
    img2: string;
    descricao: string;
    destaque: boolean;
    preco: number;
    servico: boolean;
    veiculo: number;
};

export async function getAnuncio(busca: string): Promise<AxiosResponse<Carro[]> | undefined> {
    try{
        const res = await api.get(`/anunciar/Anuncio/${busca}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
