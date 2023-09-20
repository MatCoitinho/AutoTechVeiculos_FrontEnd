import InformacoesVeiculos from "./informacoesVeiculo";
import Style from '../styles/renderizaInformacoesVeiculos.module.css'




let automovel = []
export function buscaDados(dados){
    automovel = dados;
    
}

export default function renderVeiculos() {

    

    const RenderizaModelo = automovel.map((auto, index) => (
        <InformacoesVeiculos key={index} value={auto} />
    ));
    
    return (
        <div>
        <div className={Style.renderizaInformacao}>
            {RenderizaModelo}
        </div>
        </div>
    );
}
