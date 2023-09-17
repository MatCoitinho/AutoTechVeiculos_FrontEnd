import Rodape from '../../components/rodape'
import Cabecalho from '../../components/cabecalho'
import BarraLateral from '../../components/barraLateralAdmin'
import FiltroVeiculos from '../../components/FiltroVeiculos'
import CadastroModelo from '../../components/cadastroModelo'

import RenderinformacoesVeiculos from '../../components/renderizaInformacoesVeiculos'
import InformacoesClientes from '../../components/informacoesClientes'
import RenderizaInformacoesClientes from '../../components/renderizaInformacoesClientes'
import InformacoesModelos from '../../components/informacoesModelos'
import RenderModelo from '../../components/renderizarInformacoesModelos'
import BarraCompleta from '../../components/barraCompleta'
import Styles from '../../styles/adminHome.module.css'

export default function adminHome() {
  return (
    <div className={Styles.adminHome}> 
          <Cabecalho />
          
          <div className={Styles.conteudo}>
            <BarraCompleta />
            <div className={Styles.form}>
             <RenderModelo />
            </div>
          </div>
            <Rodape/>
    </div>
      )

}