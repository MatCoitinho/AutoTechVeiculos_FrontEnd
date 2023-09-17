import Styles from '../styles/informacoesModelos.module.css'
import BotaoCadastro from './botaoCadastro'

export default function informacoesModelos(obj){

    const modelo = obj.value;
    return(
        <div className={Styles.container}>
            <div className={Styles.informacoesModelos}>
                <p>{`Modelo: ${modelo.model}`}</p>
                <p>{`Marca: ${modelo.marca}`}</p>
                <p>{`Ano: ${modelo.ano}`}</p>
                <p>{`Cambio: ${modelo.cambio}`}</p>
                <p>{`Categoria: ${modelo.categoria}`}</p>
                <p>{`Quantidade de Portas${modelo.qtdPortas}`}</p>
                <p>{`Tipo de Combustível ${modelo.tipoCombustivel}`}</p>
                <p>{`ID: ${modelo.id}`}</p>
                <button>Editar</button>
                <button>Deletar</button>
            </div>
        </div>
    )
}