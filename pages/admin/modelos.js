import Styles from '../../styles/adminHome.module.css'
import BarraLateralAdmin from '../../components/barraLateralAdmin'

import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import BarraDePesquisa from '../../components/barraDePesquisaModelos'
export default function estoque(){
    return (
        <div className={Styles.adminHome}> 
              <Cabecalho />
              <div className={Styles.conteudo}>
               <BarraLateralAdmin />
                <div className={Styles.form}>
               <BarraDePesquisa />
                  
                </div>
              </div>
                <Rodape/>
        </div>
          )
}