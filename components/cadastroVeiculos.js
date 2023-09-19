import { useState } from 'react'
import Style from '../styles/cadastroVeiculo.module.css'

export default function cadastroVeiculo(){

    const [entrda, setEntrada] = useState({
        modelo:'',
        placa:'',
        quilometragem:'',
        cor:'',
        preco:'',
        dono:'',
        servico:'',
        status:''
    })

    const getEntradas = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntrada(prevState => ({...prevState, [nome]:valor}))
    }


    const [entradaSelect,setEntradaSelect] = useState({
        servico:'venda',
        status:'disponivel'
    })

    const getSelects = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntradaSelect(prevState=>({...prevState, [nome]:valor}))
    }

    const sendEntrada = () =>{
        //montar conexão com o banco aqui
        console.log(entradaSelect)
    }













    return(
        <div className={Style.cadastroVeiculo}>
            <h1>Cadastro Modelo</h1>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Modelo</p>
                    <input type='text' id='modelo' name='modelo' placeholder='Insira o Modelo' 
                     onChange={getEntradas}/>
                
                </div>
                <div className={Style.inputs}>
                    <p>Placa</p>
                    <input type='text' id='placa' name='placa' placeholder='Insira a Placa'
                     onChange={getEntradas}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Quilometragem</p>
                    <input type='number' id='quilometragem' name='quilometragem' placeholder='Insira a Quilometragem'
                     onChange={getEntradas} />
                </div>
                <div className={Style.inputs}>
                    <p>Cor</p>
                    <input type='text' id='cor' name='cor' placeholder='Insira a Cor'
                         onChange={getEntradas}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Preço</p>
                    <input type='number' id='preco' name='preco' placeholder='Insira o preco'
                     onChange={getEntradas}/>
                </div>
                <div className={Style.inputs}>
                    <p>Dono</p>
                    <input type='text' id='dono' name='dono' placeholder='Insira o Dono'
                     onChange={getEntradas}/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Serviço</p>
                   
                    <label htmlFor='escolha um serviço'>
                        <select id='servico' name='servico' onChange={getSelects}>
                        <option value='venda'>Venda</option>
                        <option value='alguel'>Alguel</option>
                        </select> 
                    </label> 
                    
                </div>
                <div className={Style.inputs}>
                    <p>Status</p>
                   
                    <label htmlFor='status'>
                        <select id='status' name='status' onChange={getSelects}>
                        <option value='disponivel'>Disponível</option>
                        <option value='indisponivel'>Indisponível</option>
                        </select> 
                    </label> 
                    
                </div>
            </div>
           <button id='cadastrarVeiculo' name='cadastrarVeiculo' onClick={sendEntrada}>Cadastrar Veiculo</button>


        </div>
    )
}