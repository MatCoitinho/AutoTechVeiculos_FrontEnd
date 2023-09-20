import { useRouter } from "next/router"
import Rodape from "../../../../components/rodape"
import Cabecalho from "../../../../components/cabecalho"


export default function veiculo(){

    const router = useRouter() 
    const { query } = router 

    const veiculoId = query?.id



    return(
        <div>
            <Cabecalho />
                <h1>veiculo</h1>
            <Rodape />
        </div>
    )
}