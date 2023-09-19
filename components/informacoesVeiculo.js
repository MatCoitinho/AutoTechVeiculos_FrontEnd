import { useRouter } from 'next/router';
import styles from '../styles/informacoesVeiculos.module.css'
export default function informacoesVeiculos(obj){
    const autoModelo = obj.value.modelo;
    const autoVeiculo = obj.value.veiculo;
    const donoAuto = obj.value.dono;

    const {push} = useRouter()
    const editarVeiculo = (id) =>{
        push(`/admin/editar-veiculo/${id}`)
    }

    let servico;
    if(autoVeiculo.servico === true){
        servico = 'Aluguel';
    }else{
        servico = 'Venda';
    }
   let condicao;
   if(autoVeiculo.quilometragem === 0){
    condicao = 'Novo';
   } else {
    condicao = 'Usado';
   }
   let status;
   if(autoVeiculo.servico === true){
    status = 'Disponivel';
   } else {
    status = 'Indisponível';
   }

   let preco = autoVeiculo.preco * 0.01;

    return(
        <div className={styles.informacoesVeiculos}>
            <div>
                <h1>{`${autoModelo.model} ${autoModelo.marca}`} </h1>
                <p> Serviço: {`${servico}`}</p>
                <p>Condição: {`${condicao}`}</p>
                <p>Status: {`${status}`}</p>
                <p>Placa: {`${autoVeiculo.placa}`}</p>
                <p>Preço: {`${preco}`}</p>
                <p>Quilometragem: {`${autoVeiculo.quilometragem}`}</p>
                <p>Cor: {`${autoVeiculo.cor}`}</p>
                <p>Dono: {`${donoAuto.first_name}`}</p>
                <div>
                    <button id='Editar' onClick={()=>editarVeiculo(autoVeiculo.id)}>Editar</button>
                    <button id='Deletar'>Deletar</button>
                </div>
            </div>
        </div>
    );
}