import Style from '../styles/cadastroVeiculo.module.css'

export default function cadastroVeiculo(){
    return(
        <div className={Style.cadastroVeiculo}>
            <h1>Cadastro Modelo</h1>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Modelo</p>
                    <input type='text' id='Modelo' name='Modelo' placeholder='Insira o Modelo'/>
                </div>
                <div className={Style.inputs}>
                    <p>Placa</p>
                    <input type='text' id='placaModelo' name='placaModelo' placeholder='Insira a Placa'/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Quilometragem</p>
                    <input type='number' id='quilometragem' name='quilometragem' placeholder='Insira a Quilometragem'/>
                </div>
                <div className={Style.inputs}>
                    <p>Cor</p>
                    <input type='text' id='corModelo' name='corModelo' placeholder='Insira a Cor'/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Preço</p>
                    <input type='number' id='preco' name='preco' placeholder='Insira o preco'/>
                </div>
                <div className={Style.inputs}>
                    <p>Dono</p>
                    <input type='text' id='donoModelo' name='donoModelo' placeholder='Insira o Dono'/>
                </div>
            </div>
            <div className={Style.duplaTextBox}>
                <div className={Style.inputs}>
                    <p>Serviço</p>
                   
                    <label for='escolha um serviço'>
                        <select id='escolhaDeServiço' name='escolhaDeServiço'>
                        <option value='venda'>Venda</option>
                        <option value='alguel'>Alguel</option>
                        </select> 
                    </label> 
                    
                </div>
                <div className={Style.inputs}>
                    <p>Status</p>
                   
                    <label for='Status'>
                        <select id='status' name='Status'>
                        <option value='disponivel'>Disponível</option>
                        <option value='indisponivel'>Indisponível</option>
                        </select> 
                    </label> 
                    
                </div>
            </div>
           <button id='cadastrarVeiculo' name='cadastrarVeiculo'>Cadastrar Veiculo</button>


        </div>
    )
}