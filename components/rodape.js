import Image from "next/image"
import styles from '../styles/rodape.module.css'
export default function rodape(){
    return(
        <footer className={styles.rodape}>
             <div className={styles.Image}>
                <h2>Endereço</h2>
                <p> Avenida Brasil, 2012 - Centro Campo Mourão</p> 
                <p>Contatos</p>
            </div>
            <div>
                <Image 
                    src = '/logo.png'
                    width={200}
                    height={200}
                    alt ='logo site'
                />
            </div>
             <div>
                <h2>Redes Sociais</h2>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    <Image 
                        src ='/logoInsta.png'
                        width={20}
                        height={20}
                        alt='logo intagram'
                    />
                    <p>Instagram</p>
                </a><br />

                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    <Image 
                        src ='/logoTiktok.png'
                        width={30}
                        height={20}
                        alt='logo tiktok'
                    /> <br />
                    <p>Tiktok</p>
                </a>

                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    <Image 
                        src ='/logoX.png'
                        width={20}
                        height={20}
                        alt='logo X'
                    /><br />
                    <p>x</p >
                </a>
            </div>
           
        </footer>
    )
}