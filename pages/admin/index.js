import Rodape from '../../components/rodape'
import Cabecalho from '../../components/cabecalho'
import BarraLateral from '../../components/barraLateralAdmin'
import FiltroVeiculos from '../../components/FiltroVeiculos'
import RenderinformacoesVeiculos from '../../components/renderizaInformacoesVeiculos'


import Styles from '../../styles/adminHome.module.css'

export default function adminHome() {
  return (
    <div className={Styles.adminHome}> 
          <Cabecalho />
        <div className={Styles.Barra}>
          <div className={Styles.propBarra}>
          <BarraLateral/>
          <FiltroVeiculos />
          </div>
          <div className={Styles.conteudo}>
            <RenderinformacoesVeiculos />
          </div>
          

        </div>
        
        <Rodape/>
    </div>
      )

}