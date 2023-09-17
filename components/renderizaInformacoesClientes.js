import InformacoesClientes from "./informacoesClientes";
import BarraDePesquisa from "./barraDePesquisa";
import Style from '../styles/renderizaInformacoesClientes.module.css'
export default function renderizaInformacoesClientes(){
   
    let user1 = {
        "id": 2,
        "cpf": "101.041.369-44",
        "telefone": "44997192500",
        "endereco": "Valdemar C Faria, 612",
        "user": 2
    };
    let userClient1 =     {
        "id": 2,
        "password": "pbkdf2_sha256$600000$yg8jsHKgGgcpZlrglwC8V7$BQGHkpvPsV4MUn97vlNmgSwW53veIt6JGLc8ig/m+Ts=",
        "last_login": "2023-09-13T23:17:54.013093-03:00",
        "is_superuser": true,
        "username": "admin",
        "first_name": "Matheus",
        "last_name": "Do Coito Bate Coxa",
        "email": "admin@example.com",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2023-09-13T23:14:07.111780-03:00",
        "groups": [],
        "user_permissions": []
    };
    const objUser = [{user:user1, userClient:userClient1}, {user:user1, userClient:userClient1}, {user:user1, userClient:userClient1}, {user:user1, userClient:userClient1}];

    const renderCliente = objUser.map((cliente, index)=>( 
        <InformacoesClientes key={index} value={cliente} />
    ));
    
    return(
        <div className={Style.container}>
            <BarraDePesquisa />
            <div className={Style.renderizaInformacoesClientes}>
            {renderCliente}
            </div>
        </div>

    );
}