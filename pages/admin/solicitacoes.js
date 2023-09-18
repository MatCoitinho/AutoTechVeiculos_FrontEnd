import Styles from '../../styles/adminHome.module.css'


import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'

export default function estoque(){
    return (
        <div className={Styles.adminHome}> 
              <Cabecalho />
              <div className={Styles.conteudo}>
               
                <div className={Styles.form}>
                </div>
              </div>
                <Rodape/>
        </div>
          )
}