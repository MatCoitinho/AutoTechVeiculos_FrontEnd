import api from "@/lib/api"
import { AxiosResponse } from "axios";

type solicitacao ={
    id: string
    marca: string;
    modelo: string; 
    ano:string;
    quilometragem:string;
    cambio: string;
    data: string;
    servico: string;
    solicitante: string;
    combustivel: string;
    situacao: boolean;
    dono_cpf: string;
    dono_name: string;
    dono_telefone: string;
    dono_email: string;
}

export async function getSolicitante(busca: string): Promise<AxiosResponse<solicitacao[]> | undefined> {
    try{
        const res = await api.get(`/solicitar/Solicitacao/${busca}`)
        if(res.status.toString().startsWith('2')){
            return res
        }
    } catch(error) {
        console.error(error)
    }
}