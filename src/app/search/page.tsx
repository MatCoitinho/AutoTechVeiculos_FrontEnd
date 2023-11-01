'use client'
import { Header } from '../../components/ui/header'
import Footer from '../../components/ui/footer'
import { WhatsButton } from '../../components/ui/whatsapp'
import { Card } from "../../components/ui/card"
import { useEffect, useState } from 'react'
import { getAnuncio } from '../api/getAnuncio'
import { vendored } from 'next/dist/server/future/route-modules/app-page/module.compiled'


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




export default function Search({
  searchParams,
  }: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

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







  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className='max-w-7xl w-full flex flex-col py-12 px-4 mt-36'>
        <h1 className='text-2xl text-bold mb-4'>Resultados da busca</h1>
        <div className='grid grid-cols-3 gap-16'>
          { veiculos.filter(car => car.status).map(car => (
            <Card
              key={car.id}
              id={String(car.id)}
              image={car.img1}
              title={car.marca}
              status={car.status? 'Disponivel':'Indisponível'}
              cambio={car.cambio? 'Automatico':'Manual'}
              year={car.ano.toString()}
              price={car.preco.toString()}
              textbutton='Reserve já'
            />
          )) }
        </div>
      </div>
      <WhatsButton />
      <Footer />
    </main>
  )
}
