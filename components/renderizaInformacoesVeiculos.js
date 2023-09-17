import InformacoesVeiculos from "./informacoesVeiculo";
import Style from '../styles/renderizaInformacoesVeiculos.module.css'
const autoVeiculo1 =  {
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
const autoModelo1 = {
    "id": 1,
    "tipoCombustivel": "Flex",
    "model": "Onix ltz",
    "marca": "Chevrolete",
    "ano": "2023-09-16",
    "cambio": true,
    "categoria": "Sedan",
    "qtdPortas": 4
};

const donoAuto1 = {
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


const automovel = [{ dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }, { dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }, { dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }, { dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }, { dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }];

export default function renderVeiculos() {
    const RenderizaModelo = automovel.map((auto, index) => (
        <InformacoesVeiculos key={index} value={auto} />
    ));
    
    return (
        <div className={Style.renderizaInformacao}>
            {RenderizaModelo}
        </div>
    );
}
