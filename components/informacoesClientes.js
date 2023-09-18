import Styles from '../styles/InformacoesClientes.module.css'


export default function InformacoesClientes(userData){
   const user = userData.value.user;
   const userClient = userData.value.userClient;
   
    const data = userClient.last_login.substring(0,10);
    return(
        <div className={Styles.container}>
            <div className={Styles.informacoesClientes}>
                <h1>{`${userClient.first_name} ${userClient.last_name}`}</h1>
                <p>Username: {`${userClient.username}`}</p>
                <p>ID: {`${user.id}`}</p>
                <p>CPF: {`${userClient.cpf}`}</p>
                <p>Telefone: {`${userClient.telefone}`}</p>
                <p>Endereço: {`${userClient.endereco}`}</p>
                <p>E-mail: {`${userClient.email}`}</p>
                <p>Último Login: {`${data}`}</p>
            <button>Editar</button>
            <button>Deletar</button>
        </div>
            </div>
    )
}