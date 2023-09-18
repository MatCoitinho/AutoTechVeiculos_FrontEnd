import InformacoesModelos from "./informacoesModelos"
import Styles from '../styles/renderizaInformacoesModelo.module.css'
import BotaoCadastro from "./botaoCadastro";
const modelo1 = {
    "id": 1,
    "tipoCombustivel": "Flex",
    "model": "Onix ltz",
    "marca": "Chevrolete",
    "ano": "2023-09-16",
    "cambio": true,
    "categoria": "Sedan",
    "qtdPortas": 4
}

export default function renderModelo(){
    
    const modelos = [modelo1, modelo1, modelo1, modelo1];

    const renderizaModelos = modelos.map((auto, index) => (
        <InformacoesModelos key ={index} value={auto} />
        
    ));

    return(
        <div className={Styles.container}>
             <BotaoCadastro key='diretorio'value='/cadastrar-modelo'/>
            <div className={Styles.renderizaInformacoesModelos}>
                {renderizaModelos}
            </div>
        </div>
        )
}