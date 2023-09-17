import Rodape from '../../components/rodape'
import Cabecalho from '../../components/cabecalho'
import BarraLateral from '../../components/barraLateralAdmin'

import Styles from '../../styles/adminHome.module.css'

export default function adminHome() {
  return (
    <div className={Styles.adminHome}> 
        <Cabecalho />
        <div>
            <BarraLateral />
        </div>
        <Rodape/>
    </div>
      )

}