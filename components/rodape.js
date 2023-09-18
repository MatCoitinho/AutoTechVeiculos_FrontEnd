import Image from "next/image"
import styles from '../styles/rodape.module.css'
export default function rodape(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.divs}>
                <h2>Endereço</h2>
                <p> Avenida Brasil, 2012 - Centro Campo Mourão</p> 
            </div>

             <div className={styles.divs}>
                <Image 
                    src = '/logo.png'
                    width={200}
                    height={200}
                    alt ='logo site'
                />
            </div>
            
             <div  className={styles.divs}>
                <h2>Redes Sociais</h2>
                <div className={styles.links}>
                    <div className={styles.linkImage}>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                            <Image 
                                src ='/logoX.png'
                                width={20}
                                height={20}
                                alt='logo X '
                                />
                                <p>X</p>
                        </a>
                    </div>

                    <div className={styles.linkImage}>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                            <Image 
                                src ='/logoTikTok.png'
                                width={20}
                                height={20}
                                alt='logo TikTok'
                                />
                                <p>TikTok</p>
                        </a>
                    </div>

                    <div className={styles.linkImage}>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                            <Image 
                                src ='/logoInsta.png'
                                width={20}
                                height={20}
                                alt='logo intagram'
                                />
                                <p>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
           
        </footer>
    )
}