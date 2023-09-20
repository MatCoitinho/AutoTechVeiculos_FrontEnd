import { useRouter } from "next/router"
import Rodape from "../../../../components/rodape"
import Cabecalho from "../../../../components/cabecalho"
import Styles from '../../../../styles/informacoesModelos.module.css'
let valores
export function getData(data){
    valores = data
}

export default function modelo(){

    const router = useRouter() 
    const { query } = router 

    const modeloId = query?.id

    const {push} = useRouter()

    const editarModelo = (id) =>{
        push(`/admin/editar-modelo/${id}`)
    }

    return(
        <div>
            <div className={Styles.container1}>
            <Cabecalho />
            <div className={Styles.container}>
            <div className={Styles.informacoesModelos}>
                <p>{`Modelo: ${valores[0]}`}</p>
                <p>{`Marca: ${valores[1]}`}</p>
                <p>{`Ano: ${valores[2]}`}</p>
                <p>{`Cambio: ${valores[3]}`}</p>
                <p>{`Categoria: ${valores[4]}`}</p>
                <p>{`Quantidade de Portas: ${valores[5]}`}</p>
                <p>{`Tipo de Combustível: ${valores[6]}`}</p>
                <p>{`ID: ${valores[7]}`}</p>
                <button onClick={()=>editarModelo(valores[7])}>Editar</button>
                <button>Deletar</button>
            </div>
        </div>
            <Rodape />
        </div>
        </div>
    )
}