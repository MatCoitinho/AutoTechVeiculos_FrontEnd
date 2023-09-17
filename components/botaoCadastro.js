import Link from 'next/Link'
import Style from '../styles/botaoCadastro.module.css'

export default function botaoCadastro(link){
    return(
    <div className={Style.botao}>
        <Link href={link.value}>
                <button>Cadastro</button>
        </Link>
    </div>
    )
}