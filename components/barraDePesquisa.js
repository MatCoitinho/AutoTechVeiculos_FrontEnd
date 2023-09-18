import Styles from '../styles/barraDePesquisa.module.css'
import Image from 'next/image'
import lupa from '../public/lupa.png'
import { useState } from 'react'

export default function barraDePesquisa(){

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