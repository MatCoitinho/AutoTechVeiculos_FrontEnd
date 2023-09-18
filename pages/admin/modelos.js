import Styles from '../../styles/adminHome.module.css'
import BarraCompleta from '../../components/barraCompletaModelos'
import RenderModelo from '../../components/renderizarInformacoesModelos'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'

export default function estoque(){
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