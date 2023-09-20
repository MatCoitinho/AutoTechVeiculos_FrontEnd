import { useRouter } from "next/router"
import Rodape from "../../../../components/rodape"
import Cabecalho from "../../../../components/cabecalho"
import styles from '../../../../styles/informacoesVeiculos.module.css'
let valores
export function getData(data){
    valores = data
}

export default function veiculo(){

    const router = useRouter() 
    const { query } = router 

    const veiculoId = query?.id





    const {push} = useRouter()
    const editarVeiculo = (id) =>{
        push(`/admin/editar-veiculo/${id}`)
    }

    let servico;
    if(valores[1] === true){
        servico = 'Aluguel';
    }else{
        servico = 'Venda';
    }
   let status;
   if(valores[2] === true){
    status = 'Disponivel';
   } else {
    status = 'Indisponível';
   }

   let preco = valores[4] * 0.01;
   




    return(
        <div className={styles.container}>
            <Cabecalho />
                <div className={styles.informacoesVeiculos}>
                <div>
                    <h1>{`Veiculo: ${valores[8]}`} </h1>
                    <p> Serviço: {`${servico}`}</p>
                    <p>Status: {`${status}`}</p>
                    <p>Placa: {valores[3]}</p>
                    <p>Preço: R${`${preco}`}</p>
                    <p>Quilometragem: {valores[5]}</p>
                    <p>Cor: {valores[6]}</p>
                    <p>Dono: {valores[7]}</p>
                    <div>
                        <button id='Editar' onClick={()=>editarVeiculo(veiculoId)}>Editar</button>
                        <button id='Deletar'>Deletar</button>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}