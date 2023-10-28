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
          image={car.image}
          title={car.title}
          status={car.status}
          cambio={car.cambio}
          year={car.year}
          price={car.price}
          textbutton={textButton}
        />
      )) }
    </div>
  );
}

export {Grid3};