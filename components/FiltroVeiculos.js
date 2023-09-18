import React from "react";
import styles from '../styles/filtroVeiculos.module.css'
import styles1 from '../styles/caixaDeSelecao.module.css'
import { teste }  from './renderizaInformacoesVeiculos'
import { useState } from 'react';

const marcasDeCarros = [
    'Toyota',
    'Ford',
    'Honda',
    'Volkswagen',
    'BMW',
    'Mercedes-Benz',
    'Chevrolet',
    'Audi',
    'Nissan'
];

const modelosDeCarros = [
    'Toyota Corolla',
    'Ford Mustang',
    'Honda Civic',
    'Volkswagen Golf',
    'BMW X5',
    'Mercedes-Benz C-Class',
    'Chevrolet Silverado',
    'Audi A4',
    'Nissan Altima'
];

function GeraCheckBox({ bah }) { 
    return (
        <div className={styles1.caixaDeSelecao}>
            <label>
                <input type='checkbox' name={bah} value={bah} onChange={''}/>
                {bah}
            </label>
        </div>
    );
}





export default function FiltroVeiculos() {



    const [checkboxCambioValue, setCheckboxCambioValue] = useState({
        automatico: false,
        manual: false
      });
    
      const leEstadoCheckBoxCambio = (event) => {
          
        setCheckboxCambioValue({
          ...checkboxCambioValue, 
          [event.target.name]: event.target.checked,
        });
      };








    const autoVeiculo1 = {
            "id": 1,
            "placa": "ajo4123",
            "quilometragem": "0",
            "status": true,
            "preco": 4200000,
            "veiculo": 1,
            "servico": false,
            "dono": 2,
            "cor": "Preto"
        }
    const autoModelo1 = {
        "id": 1,
        "tipoCombustivel": "Flex",
        "model": "Onix ltz",
        "marca": "Chevrolete",
        "ano": "2023-09-16",
        "cambio": true,
        "categoria": "Sedan",
        "qtdPortas": 4
    }
    const donoAuto1 = {
        "id": 1,
        "password": "pbkdf2_sha256$600000$yg8jsHKgGgcpZlrglwC8V7$BQGHkpvPsV4MUn97vlNmgSwW53veIt6JGLc8ig/m+Ts=",
        "last_login": "2023-09-13T23:17:54.013093-03:00",
        "is_superuser": true,
        "username": "admin",
        "first_name": "",
        "last_name": "",
        "email": "admin@example.com",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2023-09-13T23:14:07.111780-03:00",
        "groups": [],
        "user_permissions": []
    }



let simulacao =  [{ dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }, { dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }, { dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }, { dono: donoAuto1, modelo: autoModelo1, veiculo: autoVeiculo1 }]

    teste(simulacao);

    const RenderizaModelo = modelosDeCarros.map((item, index) => (
        <GeraCheckBox key={index} bah={item} />
    ));
    const RenderizaMarca = marcasDeCarros.map((item, index) => (
        <GeraCheckBox key={index} bah={item} />
    ));

    return (
        <div className={styles.conteiner}>
        <div className={styles.filtroVeiculos}>
            <div>
                <p>Marcas</p>
                {RenderizaMarca}
                <p>Modelos</p>
                {RenderizaModelo}

                <p>Cambio</p>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='automatico' value='automatico'  onChange={leEstadoCheckBoxCambio} />
                        Automatico
                    </label>
                </div>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='Manual' value='Manual'  onChange={leEstadoCheckBoxCambio}/>
                        Manual
                    </label>
                </div>

                <p>Portas</p>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='2' value='2' />
                        2 Portas
                    </label>
                </div>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='4' value='4' />
                        4 Portas
                    </label>
                </div>

                <p>Tipo de combustível</p>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='gasolina' value='gasolina' />
                        Gasolina
                    </label>
                </div>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='Álcool' value='Álcool' />
                        Álcool
                    </label>
                </div>
                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='flex' value='flex' />
                        Flex
                    </label>
                </div>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='eletrico' value='eletrico' />
                        Elétrico
                    </label>
                </div>
                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='hibrido' value='hibrido' />
                        Hibrído
                    </label>
                </div>



                <p>Serviço</p>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='venda' value='venda' />
                        Venda
                    </label>
                </div>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='alguel' value='aluguel' />
                        Aluguel
                    </label>
                </div>
                <p>Preço</p>

                <div>
                    <label>
                        <input type='number' id='IncioRangePreco' name='IncioRangePreco' placeholder='Inicial'/>
                    </label>
                    <label>
                        <input type='number' id='fimRangePreco' name='fimRangePreco' placeholder='Final'/>
                    </label>
                </div>

                <p>Ano</p>

                <div>
                    <label>
                        <input type='number' id='IncioRangeAno' name='IncioRangeAno' placeholder='Incio'/>
                    </label>
                    <label>
                        <input type='number' id='fimRangeAno' name='fimRangeAno' placeholder='Fim'/>
                    </label>
                </div>
            </div>
        </div>
        </div>
    );
}
