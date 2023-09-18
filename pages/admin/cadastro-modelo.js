import Styles from '../../styles/adminHome.module.css'

import BarraLateralAdmin from '../../components/barraLateralAdmin'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import CadastroModelo from '../../components/cadastroModelo'


export default function estoque(){
    return (
        <div className={Styles.adminHome}> 
              <Cabecalho />
              <div className={Styles.conteudo}>
               <BarraLateralAdmin />
                <div className={Styles.form}>
                    <CadastroModelo />
                </div>
              </div>
                <Rodape/>
        </div>
          )
}