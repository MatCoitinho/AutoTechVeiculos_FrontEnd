import Styles from '../../styles/adminHome.module.css'

import BarraLateralAdmin from '../../components/barraLateralAdmin'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import RenderVeiculos from '../../components/renderizaInformacoesVeiculos'
import BarraDePesquisa from '../../components/barraDePesquisaVeiculo'

export default function estoque(){
    return (
        <div className={Styles.adminHome}> 
              <Cabecalho />
              <div className={Styles.conteudo}>
                <BarraLateralAdmin />
                <div className={Styles.form}>
                  <BarraDePesquisa />
                 <RenderVeiculos />
                </div>
              </div>
                <Rodape/>
        </div>
          )
}