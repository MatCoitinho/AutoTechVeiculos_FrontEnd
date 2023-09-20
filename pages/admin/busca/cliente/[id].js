import { useRouter } from "next/router"
import Rodape from "../../../../components/rodape"
import Cabecalho from "../../../../components/cabecalho"
import {getClient} from '../../../api/getClient'
import Styles from '../../../../styles/InformacoesClientes.module.css'
import { useState } from "react"

let valor
export function getData(dado){
    valor = dado
}


export default function clienteBusca(){

    const router = useRouter() 
    const { query } = router 

    const clienteId = query?.id

    
    const {push} = useRouter()
    const editarUsuario = (id) =>{
        push(`/admin/usuarios/${id}`)
    }

    return(
        <div className={Styles.container2}>
            <Cabecalho />
            <div className={Styles.container}>
            <div className={Styles.informacoesClientes}>
                <h1>{`${valor[0]} ${valor[1]}`}</h1>
                <p>Username: {`${valor[2]}`}</p>
                <p>ID: {`${valor[3]}`}</p>
                <p>CPF: {`${valor[4]}`}</p>
                <p>Telefone: {`${valor[5]}`}</p>
                <p>Endereço: {`${valor[6]}`}</p>
                <p>E-mail: {`${valor[7]}`}</p>
                <p>Último Login: {`${valor[8]}`}</p>
            <button onClick={() => editarUsuario(clienteId)}>Editar</button>
            <button>Deletar</button>
        </div>
            </div>
    )
            <Rodape />
        </div>
    )
}