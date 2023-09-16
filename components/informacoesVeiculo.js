
import styles from '../styles/informacoesVeiculos.module.css'
export default function informacoesVeiculos(){
    const autoVeiculo =  {
        "id": 1,
        "placa": "ajo4123",
        "quilometragem": "0",
        "status": true,
        "preco": 4200000,
        "veiculo": 1,
        "servico": false,
        "dono": 2,
        "cor": "Preto"
    };
    const autoModelo = {
        "id": 1,
        "tipoCombustivel": "Flex",
        "model": "Onix ltz",
        "marca": "Chevrolete",
        "ano": "2023-09-16",
        "cambio": true,
        "categoria": "Sedan",
        "qtdPortas": 4
    };

    const donoAuto = {
        "id": 1,
        "password": "pbkdf2_sha256$600000$yg8jsHKgGgcpZlrglwC8V7$BQGHkpvPsV4MUn97vlNmgSwW53veIt6JGLc8ig/m+Ts=",
        "last_login": "2023-09-13T23:17:54.013093-03:00",
        "is_superuser": true,
        "username": "admin",
        "first_name": "Matheus",
        "last_name": "Coito",
        "email": "admin@example.com",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2023-09-13T23:14:07.111780-03:00",
        "groups": [],
        "user_permissions": []
    }
   

    let servico;
    if(autoVeiculo.servico == true){
        servico = 'Aluguel';
    }else{
        servico = 'Venda';
    }
   let condicao;
   if(autoVeiculo.quilometragem == 0){
    condicao = 'Novo';
   } else {
    condicao = 'Usado';
   }
   let status;
   if(autoVeiculo.status == true){
    status = 'Disponivel';
   } else {
    status = 'Indisponível';
   }

   let preco = autoVeiculo.preco * 0.01;

    return(
        <div className={styles.informacoesVeiculos}>
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
                <button id='Editar'>Editar</button>
                <button id='Deletar'>Deletar</button>
            </div>
        </div>
    );
}