import Styles from '../styles/barraDePesquisa.module.css'
import Image from 'next/image'
import lupa from '../public/lupa.png'
import { useState } from 'react'
import { getClient } from '../pages/api/getClient'
import { useRouter } from 'next/router'
import { getData } from '../pages/admin/busca/cliente/[id]'

export default function barraDePesquisa(){
    
    const {push} = useRouter()

    const [valorEntrada, setValorEntrada] = useState('')

    const getValorEntrada = (event) =>{
        setValorEntrada(event.target.value)
        console.log(event.target.value)
    }

    let user;
    let client;

    const getClick = async(dado) =>{
        const aux = await getClient(dado)
       client = aux.ret1.data
        user = aux.ret2.data
        console.log(client)
        let valores = [ 
             user.first_name,
             user.last_name,
            user.username,
             client.id,
             client.cpf,
            client.telefone,
             client.endereco,
             user.email,
             user.last_login,
        ]
        getData(valores)
        push(`/admin/busca/cliente/${dado}`)   
           
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
                    onClick={()=>getClick(valorEntrada)}
                /></button>
            </div>
        </div>
    )
}