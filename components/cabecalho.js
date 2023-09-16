import styles from '../styles/cabecalho.module.css'
import Image from "next/image"

export default function cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Image 
                    src = '/logo.png'
                    width={200}
                    height={200}
                    alt ='logo site'
                />
                <p>Logout</p>
        </header>
    )
}