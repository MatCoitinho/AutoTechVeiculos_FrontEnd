import React from "react";
import styles from '../styles/filtroVeiculos.module.css'
import styles1 from '../styles/caixaDeSelecao.module.css'

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
                <input type='checkbox' name={bah} value={bah} />
                {bah}
            </label>
        </div>
    );
}

export default function FiltroVeiculos() {
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
                        <input type='checkbox' name='automatico' value='automatico' />
                        Automatico
                    </label>
                </div>

                <div className={styles1.caixaDeSelecao}>
                    <label>
                        <input type='checkbox' name='Manual' value='Manual' />
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
                

                <p>Ano</p>

                <div>
                    <label>
                        <input type='number' id='IncioRangeAno' name='IncioRangeAno' placeholder='Incio'/>
                    </label>
                    <label>
                        <input type='number' id='fimRangeAno' name='fimRangeAno' placeholder='fim'/>
                    </label>
                </div>
            </div>
        </div>
        </div>
    );
}
