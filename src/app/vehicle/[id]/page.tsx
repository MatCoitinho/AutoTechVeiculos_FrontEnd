/* eslint-disable @next/next/no-img-element */
'use client'
import { Header } from '../../../components/ui/header'
import Footer from '../../../components/ui/footer'
import { WhatsButton } from '../../../components/ui/whatsapp'
import { useRouter, useParams } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { ChevronLeft } from "lucide-react";

import { useCallback, useEffect, useState } from "react";
import { Skeleton } from "../../../components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";
import { criarReserva } from '@/app/api/createReserva';
import { criarAluguel } from '@/app/api/createAluguel';
import { getAnuncio } from '@/app/api/getAnuncio';


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









export default function Vehicle({ params }: { params: any; }) {
  const router = useRouter() 
  const [isLoading, setIsLoading] = useState(false)
  const { id } = params;

  // get vehicle from api
  const [vehicle, setVehicle] = useState<Carro[]>();
  const param = useParams()
  useEffect(() => {
    setIsLoading(true)
     const paginaId = param
    const fetchVeiculos = async () => {
      const response = await getAnuncio(String(paginaId.id));
      if (response?.data) {
        setVehicle(response.data);
        setIsLoading(false)
        
      } else {
        setVehicle([]);
        console.error('Failed to fetch veiculos');
      }
    };
    

    fetchVeiculos()
    
  }, []);










  
  const click = () => {
    let getemail = localStorage.getItem('@autotech:user')
    if(!getemail) return
    const email = getemail.replace(/["/]/g, '')
    if(vehicle && vehicle[0].id){
        const dados = {
          id: String(vehicle[0]?.id),
          email: email
        }

      if(vehicle[0].servico === true){
        criarAluguel(dados)
      } else {
        criarReserva(dados)
      }
    }
  }




  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className='max-w-7xl w-full flex flex-col py-12 px-4 mt-36'>
        <div className="flex items-center">
          <Button variant='outline' className='rounded-full' onClick={() => router.back()}>
            <ChevronLeft className='mr-2' />
            Voltar
          </Button>
          {isLoading ? (
            <Skeleton className="h-6 w-40 rounded-full ml-4" />
          ) : vehicle ? (
            <h1 className='text-2xl font-bold ml-4'>{vehicle[0]?.modelo}</h1>
          ) : (
            <h1 className='text-2xl font-bold ml-4'>Veículo desconhecido</h1>
          ) }
        </div>
        <div className='flex h-96 gap-12'>
          {isLoading ? (
            <Skeleton className="h-96 w-1/2 rounded mt-4" />
          ) : vehicle ? (
            <img src={vehicle[0]?.img1} alt={`Imagem veículo ${id}`} className='w-1/2 h-96 object-cover rounded mt-4'/>
          ) : (
            <img src='' alt={`Imagem veículo ${id}`} className='w-1/2 h-96 object-cover rounded mt-4'/>
          ) }
          <div className="w-1/2 flex flex-col mt-4 gap-4">
            {isLoading ? (
              <div className="gap-4 flex flex-col">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-1/2 rounded" />
              </div>
            ) : vehicle ? (
              <h1 className='text-xl'>{vehicle[0]?.descricao}</h1>
            ) : (
              <h1 className='text-xl'>Nenhuma descrição foi encontrada para esse veículo</h1>
            ) }

            { isLoading ? (
              <Skeleton className="h-8 w-40 rounded-full" />
            ) : vehicle ? (
              <h1 className='text-3xl font-bold'>R$ {vehicle[0]?.preco.toFixed(2)}</h1>
            ) : (
              <h1 className='text-3xl font-bold'>R$ 0.00</h1>
            ) }

            { isLoading ? (
              <div className='flex flex-col gap-4 mt-auto'>
                <Skeleton className="h-10 w-full rounded-full" />
                <Skeleton className="h-10 w-full rounded-full" />
              </div>
            ) : (
              <div className='flex flex-col gap-4 mt-auto'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="rounded-full" onClick={click}>TESTE</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Sua reserva foi confirmada com sucesso!</DialogTitle>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <Button className="rounded-full" variant='outline'>Adicionar aos meus desejos</Button>
              </div>
            ) }
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-10'>
          { isLoading ? (
            <>
              <div className='flex gap-4'>
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-36 rounded-full" />
              </div>
              <div className='flex gap-4'>
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-36 rounded-full" />
              </div>
              <div className='flex gap-4'>
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-36 rounded-full" />
              </div>
              <div className='flex gap-4'>
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-36 rounded-full" />
              </div>
            </>
          ) : vehicle ? (
            <>
              <div className='flex gap-4 items-center'>
                <div className="h-3 w-3 rounded-full bg-slate-800" />
                <span>{vehicle[0]?.status}</span>
              </div>
              <div className='flex gap-4 items-center'>
                <div className="h-3 w-3 rounded-full bg-slate-800" />
                <span>{vehicle[0]?.cambio}</span>
              </div>
              <div className='flex gap-4 items-center'>
                <div className="h-3 w-3 rounded-full bg-slate-800" />
                <span>{vehicle[0]?.ano}</span>
              </div>
              <div className='flex gap-4 items-center'>
                <div className="h-3 w-3 rounded-full bg-slate-800" />
                <span>{vehicle[0]?.combustivel}</span>
              </div>
            </>
          ) : (
            <div className='flex gap-4 items-center'>
              <div className="h-3 w-3 rounded-full bg-slate-800" />
              <span>Informações adicionais não encontradas</span>
            </div>
          ) }
        </div>
      </div>
      <WhatsButton />
      <Footer />
    </main>
  )
}
