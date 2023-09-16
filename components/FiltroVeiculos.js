import CaixaDeSelecao from './caixaDeSelecao'
import styles from '../styles/filtroVeiculos.module.css'

export default function FiltroVeiculos() {
    const marcasDeCarros = [
        'Toyota',
        'Ford',
        'Honda',
        'Volkswagen',
        'BMW',
        'Mercedes-Benz',
        'Chevrolet',
        'Audi',
        'Nissan',
        // Adicione mais marcas conforme necessário
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
        'Nissan Altima',
        // Adicione mais modelos conforme necessário
    ];
    

    // Usando map para criar um array de elementos JSX
    const RenderizaModelo = modelosDeCarros.map((item, index) => (
        <CaixaDeSelecao key={index} value={item} />
    ));
    const RenderizaMarca = marcasDeCarros.map((item, index) => (
        <CaixaDeSelecao key={index} value={item} />
    ));

    return (
        <div className={styles.filtroVeiculos}>
            <div>
                <p>Marcas</p>
                {RenderizaMarca}
                <p>Modelos</p>
                {RenderizaModelo}
                <p>Preço</p>
                <div>
                    <label>
                        <input type='text' id='IncioRangePreco' name='IncioRangePreco' placeholder='Incio'/>
                    </label>
                    <label>
                        <input type='text' id='fimRangePreco' name='fimRangePreco' placeholder='fim'/>
                    </label>
                </div>
                <p>Ano</p>
                <div>
                    <label>
                        <input type='text' id='IncioRangeAno' name='IncioRangeAno' placeholder='Incio'/>
                    </label>
                    <label>
                        <input type='text' id='fimRangeAno' name='fimRangeAno' placeholder='fim'/>
                    </label>
                </div>
            </div>
        </div>
    );
}

