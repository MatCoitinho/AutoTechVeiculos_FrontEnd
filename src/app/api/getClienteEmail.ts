import { TIMEOUT } from 'dns';
import api from '../../lib/api'

import { AxiosResponse } from 'axios';

type Cliente = {
    imgPerfil: string;
    imgBanner: string;
}

type tipo  = {
    email: string,
}

export async function getClienteEmail(busca: tipo): Promise<AxiosResponse<Cliente> | undefined> {
    console.log(`busca  ${busca.email}`)
    try{
        const res = await api.post(`/login/retrieveImagens/`, busca )
        if(res.status === 200){
            console.log("RESPOSTA")
            console.log(res)
            return res
        }
    } catch(error) {
        console.error("DEU ERRADO")
    }
}
