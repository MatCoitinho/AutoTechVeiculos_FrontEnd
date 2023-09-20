import { useState } from 'react'
import Styles from '../styles/cadastroModelo.module.css'
import { createModel } from '../pages/api/createModel'



export default function cadastroModelo(){
    

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
        cambio:'false',
        categoria:'compacto',
        quantidadePortas:4
    })

    const getSelects = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntradaSelect(prevState=>({...prevState, [nome]:valor}))
    }

    const handleClick = async()=>{ 
        const modeloData = {
            tipoCombustivel: entradaSelect.combustivel,
            model: entrada.modelo,
            marca: entrada.marca,
            ano: Number(entrada.ano),
            cambio: entrada.cambio,
            categoria: entradaSelect.categoria,
            qtdPortas: Number(entradaSelect.quantidadePortas)
        }



        return await createModel(modeloData).catch(err => console.log(err));
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
                        <option value='false'>Manual</option>
                        <option value='true'>Automatico</option>
                        </select> 
                    </label> 
                    
                </div>
                <div className={Styles.inputs}>
                    <p>Categoria</p>
                   
                    <label htmlFor='escolha uma categoria'>
                        <select id='categoria' name='categoria' onChange={getSelects}>
                        <option value='compacto'>Compacto</option>
                        <option value='sedan'>Sedan</option>
                        <option value='hatchback'>Hatchback</option>
                        <option value='picape'>Picape</option>
                        <option value='esportivo'>Esportivo</option>
                        </select> 
                    </label> 
                    
                </div>
            </div>
            <div className={Styles.duplaTextBox}>
                <div className={Styles.inputs}>
                    <p>Quantidade de Portas</p>
                   
                    <label htmlFor='combustivel'>
                        <select id='combustivel' name='combustivel' onChange={getSelects}>
                        <option value={4}>Quatro Portas</option>
                        <option value={2}>Duas Portas</option>
                        </select> 
                    </label> 
                </div>
            </div>
           <button id='cadastrarModelo' name='cadastrarModelo' onClick={handleClick}>Cadastrar Modelo</button>
        </div>
    )
}