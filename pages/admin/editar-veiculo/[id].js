import { useRouter } from "next/router"
import Rodape from "../../../components/rodape"
import Cabecalho from "../../../components/cabecalho"
import { useState } from "react"
import Style from '../../../styles/editarVeiculo.module.css'



 export default function veiculoEdita(){
    const router = useRouter() 
    const { query } = router 

    const veiculoId = query?.id


    const [entrada, setEntrada] = useState({
        modelo:'asd',
        placa:'asd',
        quilometragem:'234',
        cor:'asd',
        preco:'23213',
        dono:'asd',
        servico:'asd',
        status:'asd'
    })

    const getEntradas = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntrada(prevState => ({...prevState, [nome]:valor}))
    }


    const [entradaSelect,setEntradaSelect] = useState({
        servico:'venda',
        status:'disponivel',
        condicao:'Usado'
    })

    const getSelects = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntradaSelect(prevState=>({...prevState, [nome]:valor}))
    }

    const sendEntrada = () =>{
        //montar conexão com o banco aqui
        console.log(entradaSelect)
        console.log(entrada)
    }













    return(
        <div className={Style.container}>
        <Cabecalho />
        <div className={Style.editarVeiculo}>
            <h1>Editar Veiculo</h1>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Modelo</p>
                    <input type='text' id='modelo' name='modelo' placeholder='Insira o Modelo' 
                     value={entrada.modelo} onChange={getEntradas}/>
                                 
                </div>
                <div className={Style.inputs}>
                    <p>Placa</p>
                    <input type='text' id='placa' name='placa' placeholder='Insira a Placa'
                     onChange={getEntradas} value={entrada.placa}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Quilometragem</p>
                    <input type='number' id='quilometragem' name='quilometragem' placeholder='Insira a Quilometragem'
                     onChange={getEntradas} value={entrada.quilometragem} />
                </div>
                <div className={Style.inputs}>
                    <p>Cor</p>
                    <input type='text' id='cor' name='cor' placeholder='Insira a Cor'
                         onChange={getEntradas} value={entrada.cor}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Preço</p>
                    <input type='number' id='preco' name='preco' placeholder='Insira o preco'
                     onChange={getEntradas} value={entrada.preco}/>
                </div>
                <div className={Style.inputs}>
                    <p>Dono</p>
                    <input type='text' id='dono' name='dono' placeholder='Insira o Dono'
                     onChange={getEntradas} value={entrada.dono}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Serviço</p>
                   
                    <label htmlFor='escolha um serviço'>
                        <select id='servico' name='servico' onChange={getSelects} value={entradaSelect.servico}>
                        <option value='venda'>Venda</option>
                        <option value='alguel'>Alguel</option>
                        </select> 
                    </label> 
                    
                </div>
                <div className={Style.inputs}>
                    <p>Status</p>
                   
                    <label htmlFor='status'>
                        <select id='status' name='status' onChange={getSelects} value={entradaSelect.status}>
                        <option value='disponivel'>Disponível</option>
                        <option value='indisponivel'>Indisponível</option>
                        </select> 
                    </label> 
                    
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Condição</p>
                   
                    <label htmlFor='escolha uma condiçõa'>
                        <select id='condicao' name='condicao' onChange={getSelects} value={entradaSelect.condicao}>
                        <option value='novo'>Novo</option>
                        <option value='usado'>Usado</option>
                        </select> 
                    </label> 
                    
                </div>
                
            </div>
           <button id='editarVeiculo' name='editarVeiculo' onClick={sendEntrada}>Editar Veiculo</button>


        </div>
        <Rodape />
        </div>
    )


}