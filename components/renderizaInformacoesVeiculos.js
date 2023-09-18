import InformacoesVeiculos from "./informacoesVeiculo";
import Style from '../styles/renderizaInformacoesVeiculos.module.css'

let automovel;

export function teste(bah){
    automovel = bah;

}



export default function renderVeiculos() {
    const RenderizaModelo = automovel.map((auto, index) => (
        <InformacoesVeiculos key={index} value={auto} />
    ));
    
    return (
        <div className={Style.renderizaInformacao}>
            {RenderizaModelo}
        </div>
    );
}
