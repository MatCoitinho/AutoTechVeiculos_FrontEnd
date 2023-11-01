'use client'

import React, { useEffect, useState } from 'react';
import { Grid3 } from "../components/ui/grid3";
import { Header } from '../components/ui/header'
import Footer from '../components/ui/footer'
import { WhatsButton } from '../components/ui/whatsapp'
import { getVeiculo } from "./api/getVeiculos";
import { getAnuncio } from "./api/getAnuncio";



type Carro = {
  id: number;
  modelo: string;
  marca: string;
  cambio: boolean;
  ano: string;
  combustivel: string;
  placa: string;
  cor: string;
  categoria: string;
  status: boolean;
  dono: string;
  pontos: number;
  img1: string;
  img2: string;
  descricao: string;
  destaque: boolean;
  preco: number;
  servico: boolean;
  veiculo: number;
};












export default function Home() {
   
  const [veiculos, setVeiculos] = useState<Carro[]>([]);

  useEffect(() => {
    const fetchVeiculos = async () => {
      const response = await getAnuncio('');
      if (response) {
        setVeiculos(response.data);
      } else {
        setVeiculos([]);
        console.error('Failed to fetch veiculos');
      }
    };

    fetchVeiculos();
  }, []);
  
  let alugueis = veiculos.filter((carro) => carro.servico === true && carro.destaque === true);
  let reservas = veiculos.filter((carro) => carro.servico === false && carro.destaque === true);
  let destaques = veiculos.filter((carro) => carro.servico === false && carro.destaque === false);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className='bg-hero w-full h-96 mt-24 bg-cover flex items-center justify-center'>
        <div className='max-w-7xl w-full flex items-center justify-center flex-col'>
          <h1 className="font-bold text-red-700 tracking-[0.3em] text-3xl">AUTOTECH</h1>
          <div className="w-24 h-1 bg-red-700 my-12"/>
          <h4 className="animate-typing overflow-hidden whitespace-nowrap font-semibold text-white tracking-[0.3em] text-xl text-center px-4">Seu sonho sobre rodas</h4>
        </div>
      </div>

      <div className='max-w-7xl w-full flex flex-col py-12 px-4'>
        <h1 className='text-2xl text-bold mb-4'>Populares</h1>
        <Grid3 data={destaques} textButton="Reserve"/>
      </div>

      <div className='max-w-7xl w-full flex flex-col py-12 px-4'>
        <h1 className='text-2xl text-bold mb-4'>Destaque venda</h1>
        <Grid3 data={reservas} textButton="Reserve já"/>
      </div>

      <div className='max-w-7xl w-full flex flex-col py-12 px-4'>
        <h1 className='text-2xl text-bold mb-4'>Destaque aluguel</h1>
        <Grid3 data={alugueis} textButton="Alugue já"/>
      </div>
      <WhatsButton />
      <Footer />
    </main>
  )
}
