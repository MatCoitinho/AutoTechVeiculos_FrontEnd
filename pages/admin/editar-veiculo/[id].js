import { useRouter } from "next/router"
import Rodape from "../../../components/rodape"
import Cabecalho from "../../../components/cabecalho"
import { useState } from "react"
import Style from '../../../styles/editarVeiculo.module.css'
import { patchVeiculo } from '../../../pages/api/patchVehicle'



let valores
export function buscaDadosPatch(dados){

    valores = dados

}




 export default function veiculoEdita(){
    const router = useRouter() 
    const { query } = router 

    const veiculoId = query?.id


    const [entrada, setEntrada] = useState({
        modelo:valores[8],
        placa:valores[3],
        quilometragem:valores[5],
        cor:valores[6],
        preco:valores[4],
        dono:valores[7],
    })

    const getEntradas = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntrada(prevState => ({...prevState, [nome]:valor}))
    }

    const [entradaSelect,setEntradaSelect] = useState({
        servico:valores[1],
        status:valores[2],
    })

    const getSelects = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntradaSelect(prevState=>({...prevState, [nome]:valor}))
    }


    async function handleClick(){
        const data = {
            quilometragem: entrada.quilometragem,
            cor: entrada.cor,
            preco: Number(entrada.preco),
            dono: Number(entrada.dono),
            servico: Boolean(entradaSelect.servico),
            status: Boolean(entradaSelect.status)
        } 

        return await patchVeiculo(veiculoId,data).catch(err => console.log(err));
    }













    return(
        <div className={Style.container}>
        <Cabecalho />
        <div className={Style.editarVeiculo}>
            <h1>Cadastro Veiculo</h1>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Modelo</p>
                    <input type='text' id='modelo' name='modelo' value={entrada.modelo} placeholder='Insira o Modelo' 
                     onChange={getEntradas}/>
                
                </div>
                <div className={Style.inputs}>
                    <p>Placa</p>
                    <input type='text' id='placa' name='placa' value={entrada.placa} placeholder='Insira a Placa'
                     onChange={getEntradas}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Quilometragem</p>
                    <input type='number' id='quilometragem' value={entrada.quilometragem} name='quilometragem'  placeholder='Insira a Quilometragem'
                     onChange={getEntradas} />
                </div>
                <div className={Style.inputs}>
                    <p>Cor</p>
                    <input type='text' id='cor' name='cor' value={entrada.cor} placeholder='Insira a Cor'
                         onChange={getEntradas}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Preço</p>
                    <input type='number' id='preco' name='preco' value={entrada.preco} placeholder='Insira o preco'
                     onChange={getEntradas}/>
                </div>
                <div className={Style.inputs}>
                    <p>Dono</p>
                    <input type='text' id='dono' name='dono'  value={entrada.dono} placeholder='Insira o Dono'
                     onChange={getEntradas}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Serviço</p>
                   
                    <label htmlFor='escolha um serviço'>
                        <select id='servico' name='servico' value={entradaSelect.servico} onChange={getSelects} >
                        <option value='false'>Venda</option>
                        <option  value='true'>Aluguel</option>
                        </select> 
                    </label> 
                    
                </div>
                <div className={Style.inputs}>
                    <p>Status</p>
                   
                    <label htmlFor='status'>
                        <select id='status' name='status'  value={entradaSelect.status} onChange={getSelects}>
                            <option value='true'>Disponível</option>
                        <option value='false'>Indisponível</option>
                        </select> 
                    </label> 
                </div>
            </div>
           <button id='cadastrarVeiculo' name='cadastrarVeiculo' onClick={handleClick}>Cadastrar Veiculo</button>
        </div>
        <Rodape />
        </div>
    )


}