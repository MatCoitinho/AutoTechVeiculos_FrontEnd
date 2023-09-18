import Styles from '../../styles/adminHome.module.css'
import RenderClientes from '../../components/renderizaInformacoesClientes'
import BarraLateralAdmin from '../../components/barraLateralAdmin'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'

export default function estoque(){
    return (
        <div className={Styles.adminHome}> 
              <Cabecalho />
              <div className={Styles.conteudo}>
                <BarraLateralAdmin />
                <div className={Styles.form}>
               <RenderClientes />
                </div>
              </div>
                <Rodape/>
        </div>
          )
}