//import { Children } from 'react'
import Styles from '../styles/barraLateralAdmin.module.css'
import { useRouter } from 'next/router';

export default function barraLateralAdmin(){
    const router = useRouter();

    const redirecionaAdmin = (event) => {
        router.push(`${event.target.value}`)
    }

    return(
        <div className={Styles.barraLateralAdmin}>
            <div> 
            <button id='Estoque' value='estoque' onClick={redirecionaAdmin}>Estoque</button>
            <button id='Modelos' value='modelos' onClick={redirecionaAdmin}>Modelos</button>
            <button id='Cliente' value='clientes' onClick={redirecionaAdmin}>Clientes</button>
            <button id='Solicitacoes' value='solicitacoes' onClick={redirecionaAdmin}>Solicitações</button>
            <button id='Anunciar' value='anunciar' onClick={redirecionaAdmin}>Anunciar</button>
            </div>
            
        </div>

    )
}

