'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from './button';
import { useRouter } from 'next/navigation';
import { criarAluguel } from '@/app/api/createAluguel';
import { criarReserva } from '@/app/api/createReserva';

interface ICardProps {
  id: string;
  image: string;
  title: string;
  status: boolean;
  cambio: boolean;
  year: string;
  price: string;
  textbutton?: string;
  servico:boolean;
}

function Card({ id, image, title, status, cambio, year, price, textbutton, servico }: ICardProps) {
  const router = useRouter()
  
  const finalizar = () =>{
    let email = localStorage.getItem('@autotech:user')
    let vaule = email?.replace(/["/]/g, '');
    const valor = {
      id: String(id),
      email: String(vaule)
    }
    if(servico === true){
      criarAluguel(valor)
    }else{
      criarReserva(valor)
    }
  }

  return(
    <div className='w-full rounded bg-accent'>
      <img src={image} alt={`Imagem veículo ${id}`} className='w-full object-cover rounded'/>
      <div className='flex flex-col gap-2 p-4'>
        <h1 className='text-xl'>{title}</h1>
        <div className='flex justify-between items-center'>
          <h4 className='text-sm'>{status===true? 'Novo':'Usado'}</h4>
          <h4 className='text-sm'>{cambio === true? 'Automatico':'Manual'}</h4>
          <h4 className='text-sm'>{year}</h4>
        </div>
        <h2 className='text-2xl font-bold'>R$ {parseInt(price).toFixed(2)}</h2>
        <Button className='rounded-full' onClick={finalizar}>{servico? 'Aluguel':'Reserva' }</Button>
      </div>
    </div>
  );
}

export {Card};