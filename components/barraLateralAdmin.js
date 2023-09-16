//import { Children } from 'react'
import Styles from '../styles/barraLateralAdmin.module.css'


export default function barraLateralAdmin(){

    return(
        <div className={Styles.barraLateralAdmin}>
            <div> 
            <button id='Estoque'>Estoque</button>
            <button id='Modelos'>Modelos</button>
            <button id='Cliente'>Clientes</button>
            <button id='Solicitacoes'>Solicitações</button>
            <button id='Anunciar'>Anunciar</button>
            </div>
            
        </div>

    )
}

