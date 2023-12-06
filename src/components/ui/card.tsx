'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from './button';
import { useRouter } from 'next/navigation';

interface ICardProps {
  id: string;
  image: string;
  title: string;
  status: string;
  cambio: string;
  year: string;
  price: string;
  textbutton?: string;
}

function Card({ id, image, title, status, cambio, year, price, textbutton }: ICardProps) {
  const router = useRouter()
  
  function goToDetails() {
    router.push(`/vehicle/${id}`)
  }

  return(
    <div className='w-full rounded bg-accent'>
      <img src={image} alt={`Imagem veículo ${id}`} className='w-full object-cover rounded'/>
      <div className='flex flex-col gap-2 p-4'>
        <h1 className='text-xl'>{title}</h1>
        <div className='flex justify-between items-center'>
          <h4 className='text-sm'>{status}</h4>
          <h4 className='text-sm'>{cambio}</h4>
          <h4 className='text-sm'>{year}</h4>
        </div>
        <h2 className='text-2xl font-bold'>R$ {parseInt(price).toFixed(2)}</h2>
        <Button className='rounded-full' onClick={goToDetails}>{ textbutton || 'Ver detalhes' }</Button>
      </div>
    </div>
  );
}

export {Card};