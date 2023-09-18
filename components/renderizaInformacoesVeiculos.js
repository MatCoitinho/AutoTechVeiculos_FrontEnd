import InformacoesVeiculos from "./informacoesVeiculo";
import Style from '../styles/renderizaInformacoesVeiculos.module.css'
import BotaoCadastro from "./botaoCadastro";
let automovel;

export function teste(bah){
    automovel = bah;

}



export default function renderVeiculos() {
    const RenderizaModelo = automovel.map((auto, index) => (
        <InformacoesVeiculos key={index} value={auto} />
    ));
    
    return (
        <div>

            <BotaoCadastro value='cadastro-veiculo'/>
        <div className={Style.renderizaInformacao}>
            {RenderizaModelo}
        </div>
        </div>
    );
}
