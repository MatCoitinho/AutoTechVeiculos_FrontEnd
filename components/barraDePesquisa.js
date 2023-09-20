import Styles from '../styles/barraDePesquisa.module.css'
import Image from 'next/image'
import lupa from '../public/lupa.png'
import { useState } from 'react'
import { buscaDados } from './renderizaInformacoesClientes'


let user1 = {
    "id": 2,
    "cpf": "101.041.369-44",
    "telefone": "44997192500",
    "endereco": "Valdemar C Faria, 612",
    "user": 2
};
let userClient1 =     {
    "id": 2,
    "password": "pbkdf2_sha256$600000$yg8jsHKgGgcpZlrglwC8V7$BQGHkpvPsV4MUn97vlNmgSwW53veIt6JGLc8ig/m+Ts=",
    "last_login": "2023-09-13T23:17:54.013093-03:00",
    "is_superuser": true,
    "username": "admin",
    "first_name": "Matheus",
    "last_name": "Coi",
    "email": "admin@example.com",
    "is_staff": true,
    "is_active": true,
    "date_joined": "2023-09-13T23:14:07.111780-03:00",
    "groups": [],
    "user_permissions": []
};







export default function barraDePesquisa(){
    
    let objUser = [{user:user1, userClient:userClient1}]



    buscaDados(objUser)
    const [valorEntrada, setValorEntrada] = useState('')

    const getValorEntrada = (event) =>{
        setValorEntrada(event.target.value)
        console.log(event.target.value)
    }

    const getClick = (event) =>{
        alert(valorEntrada)
    }

    return(
        <div className={Styles.containerBarraDePesquisa}>
            <div className={Styles.barraDePesquisa}>
                <input type='text' id='barraDePesquisa' name='barraDePesquisa' placeholder='Insira o nome do cliente'
                    value={valorEntrada} onChange={getValorEntrada}
                />
                <button id='botão de pesquisa'><Image
                    src={lupa}
                    width={20}
                    height={20}
                    alt='imagem botão de pesquisa'
                    onClick={getClick}
                /></button>
            </div>
        </div>
    )
}