import Rodape from '../../components/rodape'
import Cabecalho from '../../components/cabecalho'
import BarraLateral from '../../components/barraLateralAdmin'
import FiltroVeiculos from '../../components/FiltroVeiculos'
import CadastroModelo from '../../components/cadastroModelo'

import RenderinformacoesVeiculos from '../../components/renderizaInformacoesVeiculos'


import Styles from '../../styles/adminHome.module.css'

export default function adminHome() {
  return (
    <div className={Styles.adminHome}> 
          <Cabecalho />
          <div className={Styles.conteudo}>
            <BarraLateral />
            <CadastroModelo />
          </div>
            <Rodape/>
    </div>
      )

}