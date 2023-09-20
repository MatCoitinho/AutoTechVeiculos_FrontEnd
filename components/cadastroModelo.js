import { useState } from 'react'
import Styles from '../styles/cadastroModelo.module.css'
import { createModel } from '../pages/api/createModel';

export default function cadastroModelo(){
    async function handleClick(){
        return await createModel(data).catch(err => console.log(err));
    }

    const [entrada, setEntrada] = useState({
        marca:'',
        modelo:'',
        ano:''
    })

    const getEntradas = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntrada(prevState => ({...prevState, [nome]:valor}))
    }

    const [entradaSelect,setEntradaSelect] = useState({
        combustivel:'gasolina',
        cambio:'manual',
        categoria:'Compacto',
        quantidadePortas:'quatroPortas'
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
        <div className={Styles.cadastroModelo}>
            <h1>Cadastro Modelo</h1>
            <div className={Styles.duplaTextBox}>
                <div className={Styles.inputs}>
                    <p>Marca</p>
                    <input type='text' id='marca' name='marca' placeholder='Insira a Marca' onChange={getEntradas}/>
                </div>
                <div className={Styles.inputs}>
                    <p>Combustivel</p>
                   
                    <label htmlFor='escolha um Combustivel'>
                        <select id='escolhaDeCombustivel' name='escolhaDeCombustivel' onChange={getSelects}>
                        <option value='gasolina'>Gasolina</option>
                        <option value='hibrido'>Híbrido</option>
                        <option value='eletrico'>Elétrico</option>
                        <option value='alcool'>Álcool</option>
                        <option value='flex'>Flex</option>

                        </select> 
                    </label> 
                    
                </div>
            </div>
            <div className={Styles.duplaTextBox}>
                <div className={Styles.inputs}>
                    <p>Modelo</p>
                    <input type='text' id='modelo' name='modelo' placeholder='Insira o Modelo' onChange={getEntradas}/>
                </div>
                <div className={Styles.inputs}>
                    <p>Ano</p>
                    <input type='number' id='ano' name='ano' placeholder='Insira o Ano' onChange={getEntradas}/>
                </div>
            </div>
            <div className={Styles.duplaTextBox}>
                <div className={Styles.inputs}>
                    <p>Cambio</p>
                   
                    <label htmlFor='escolha um cambio'>
                        <select id='escolhaDeCambio' name='escolhaDeCambio' onChange={getSelects}>
                        <option value='Manual'>Manual</option>
                        <option value='Automatico'>Automatico</option>
                        </select> 
                    </label> 
                    
                </div>
                <div className={Styles.inputs}>
                    <p>Categoria</p>
                   
                    <label htmlFor='escolha uma categoria'>
                        <select id='categoria' name='categoria' onChange={getSelects}>
                        <option value='Compacto'>Compacto</option>
                        <option value='Sedan'>Sedan</option>
                        <option value='Hatchback'>Hatchback</option>
                        <option value='Picape'>Picape</option>
                        <option value='Esportivo'>Esportivo</option>
                        </select> 
                    </label> 
                    
                </div>
            </div>
            <div className={Styles.duplaTextBox}>
                <div className={Styles.inputs}>
                    <p>Quantidade de Portas</p>
                   
                    <label htmlFor='escolha um cambio'>
                        <select id='escolhaDeCambio' name='escolhaDeCambio' onChange={getSelects}>
                        <option value='quatroPortas'>Quatro Portas</option>
                        <option value='duasPortas'>Duas Portas</option>
                        </select> 
                    </label> 
                </div>
            </div>
           <button id='cadastrarModelo' name='cadastrarModelo' onClick={handleClick}>Cadastrar Modelo</button>
        </div>
    )
}