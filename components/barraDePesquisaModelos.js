import Styles from '../styles/barraDePesquisa.module.css'
import Image from 'next/image'
import lupa from '../public/lupa.png'
import { useState } from 'react'
import { getModel } from '../pages/api/getModels'
import { useRouter } from 'next/router'
import { getData } from '../pages/admin/busca/modelo/[id]'

export default function barraDePesquisa(){
   
    const {push} = useRouter()

    const [valorEntrada, setValorEntrada] = useState('')
    
    const getValorEntrada = (event) =>{
        setValorEntrada(event.target.value)
        console.log(event.target.value)
    }


   
    const getClick = async(dado) =>{
        console.log(dado)
        const aux = await getModel(dado)
        let controle = aux.data
        
        let valores = [ 
            controle.model,
            controle.marca,
            controle.ano,
            controle.cambio,
            controle.categoria,
            controle.qtdPortas,
            controle.tipoCombustivel,
            controle.id
        ]
        
        getData(valores)
        push(`/admin/busca/modelo/${dado}`)

    }   


    return(
        <div className={Styles.containerBarraDePesquisa}>
            <div className={Styles.barraDePesquisa}>
                <input type='text' id='barraDePesquisa' name='barraDePesquisa' placeholder='Insira o Modelo'
                    value={valorEntrada} onChange={getValorEntrada}
                />
                <button id='botão de pesquisa'><Image
                    src={lupa}
                    width={20}
                    height={20}
                    alt='imagem botão de pesquisa'
                    onClick={() => getClick(valorEntrada)}
                /></button>
            </div>
        </div>
    )
}