import { useState } from 'react'
import Styles from '../styles/cadastroModelo.module.css'

export default function cadastroModelo(){

    const [entrada, setEntrada] = useState({
        marca:'',
        combustivel:'',
        modelo:'',
        ano:''
    })


    const getEntradas = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntrada(prevState => ({...prevState, [nome]:valor}))
    }




    const sendEntrada = () => {
        console.log(entrada)
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
                   
                    <label for='escolha um Combustivel'>
                        <select id='escolhaDeCombustivel' name='escolhaDeCombustivel'>
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
                    <input type='number' inputmode="numeric" id='ano' name='ano' placeholder='Insira o Ano' onChange={getEntradas}/>
                </div>
            </div>
            <div className={Styles.duplaTextBox}>
                <div className={Styles.inputs}>
                    <p>Cambio</p>
                   
                    <label for='escolha um cambio'>
                        <select id='escolhaDeCambio' name='escolhaDeCambio'>
                        <option value='Manual'>Manual</option>
                        <option value='Automatico'>Automatico</option>
                        </select> 
                    </label> 
                    
                </div>
                <div className={Styles.inputs}>
                    <p>Categoria</p>
                    <input type='text' id='marca' name='marca' placeholder='Insira a Marca do Modelo' onChange={getEntradas}/>
                </div>
            </div>
           <button id='cadastrarModelo' name='cadastrarModelo' onClick={sendEntrada}>Cadastrar Modelo</button>
           
        </div>
        
    )
}