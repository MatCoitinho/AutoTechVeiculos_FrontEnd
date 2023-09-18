import Styles from '../../styles/adminHome.module.css'

import BarraCompleta from "../../components/barraCompletaVeiculos"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import RenderVeiculos from '../../components/renderizaInformacoesVeiculos'

export default function estoque(){
    return (
        <div className={Styles.adminHome}> 
              <Cabecalho />
              <div className={Styles.conteudo}>
                <BarraCompleta />
                <div className={Styles.form}>
                 <RenderVeiculos />
                </div>
              </div>
                <Rodape/>
        </div>
          )
}