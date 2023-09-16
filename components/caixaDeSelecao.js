import React from "react"
import styles from '../styles/caixaDeSelecao.module.css'

export default function caixaDeSelecao(bah){
    bah = bah.value
    return( 
        <div className={styles.caixaDeSelecao}>
            <label>
                <input type='checkbox' name={`${bah}`} value={`${bah}`}/>{`${bah}`}
            </label>
        </div>
    )
}