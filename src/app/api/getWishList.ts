import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Venda = {
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

export async function getFavoritos(email: string): Promise<AxiosResponse<Venda[]> | undefined> {
    try{
        const res = await api.get(`/anunciar/Anuncio/${email}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}






