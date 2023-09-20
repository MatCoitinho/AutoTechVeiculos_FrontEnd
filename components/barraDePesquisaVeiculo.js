import Styles from '../styles/barraDePesquisa.module.css'
import Image from 'next/image'
import lupa from '../public/lupa.png'
import { useState } from 'react'
import { getVeiculo } from '../pages/api/getVehicle'
import { useRouter } from 'next/router'
import { getData } from '../pages/admin/busca/veiculo/[id]'




export default function barraDePesquisa(){
    
    const {push} = useRouter()


    const [valorEntrada, setValorEntrada] = useState('')

    const getValorEntrada = (event) =>{
        setValorEntrada(event.target.value)
        console.log(event.target.value)
    }
   
    const getClick = async(dado) =>{
        const aux = await getVeiculo(dado)
        let valor = aux.data
        let valores = [
            valor.veiculo,//0
            valor.servico,//1
            valor.status,//2
            valor.placa,//3
            valor.preco,//4
            valor.quilometragem,//5
            valor.cor,//6
            valor.dono,//7
            valor.id,//8
            
        ]
        getData(valores)
        push(`/admin/busca/veiculo/${dado}`)

        
    }

    return(
        <div className={Styles.containerBarraDePesquisa}>
            <div className={Styles.barraDePesquisa}>
                <input type='text' id='barraDePesquisa' name='barraDePesquisa' placeholder='Insira o nome do veiculo'
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