import InformacoesModelos from "./informacoesModelos"
import Styles from '../styles/renderizaInformacoesModelo.module.css'


let modelos
export function buscaDados(dados){
    modelos = dados;
    console.log(modelos)
}

export default function renderModelo(){
    
    

    const renderizaModelos = modelos.map((auto, index) => (
        <InformacoesModelos key ={index} value={auto} />
        
        ));
       

    return(
        <div className={Styles.container}>
            <div className={Styles.renderizaInformacoesModelos}>
                {renderizaModelos}
            </div>
        </div>
        )
}