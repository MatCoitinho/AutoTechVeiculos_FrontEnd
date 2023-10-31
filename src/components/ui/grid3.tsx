import React from 'react';
import { Card } from './card';

interface IGrid3Props {
  data: any[];
  textButton: string;
}

function Grid3({ data, textButton }: IGrid3Props) {
  return(
    <div className='grid grid-cols-3 grid-rows-1 gap-16'>
      { data.filter((_, index) => index < 3).map(car => (
        <Card
          key={car.id}
          id={car.id}
          image={car.img1}
          title={car.marca}
          status={car.status === true? 'Disponível':'Indisponível'}
          cambio={car.cambio === true? 'Automatico':'Manual'}
          year={car.ano}
          price={car.preco}
          textbutton={textButton}
        />
      )) }
    </div>
  );
}

export {Grid3};