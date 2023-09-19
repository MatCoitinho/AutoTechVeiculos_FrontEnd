
import FiltroModelos from "./filtroModelos";

import BarraLateralAdmin from "./barraLateralAdmin";
import Styles from '../styles/barraCompleta.module.css'



export default function barraCompleta(){

    return(
        <div className={Styles.container}>
            <div className={Styles.barraCompleta}>
                <BarraLateralAdmin />
                <FiltroModelos />
            </div>
        </div>
    )
}