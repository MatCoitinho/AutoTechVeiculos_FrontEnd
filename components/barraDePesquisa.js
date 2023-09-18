import Styles from '../styles/barraDePesquisa.module.css'
import Image from 'next/image'
import lupa from '../public/lupa.png'

export default function barraDePesquisa(){
    return(
        <div className={Styles.containerBarraDePesquisa}>
            <div className={Styles.barraDePesquisa}>
                <input type='text' id='barraDePesquisa' name='barraDePesquisa' placeholder='Insira o nome do cliente' />
                <button id='botão de pesquisa'><Image
                    src={lupa}
                    width={20}
                    height={20}
                    alt='imagem botão de pesquisa'
                /></button>
            </div>
        </div>
    )
}