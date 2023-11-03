import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Reserva = {
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
    qtdPortas: number;
    data: string;
    horario: string;
    cliente: number;
    veiculo: number;
}



export async function getReserva(busca: string): Promise<AxiosResponse<Reserva[]> | undefined> {
    try{
        const res = await api.get(`/reservar/Reserva/${busca}`, {timeout: 1000})
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}
