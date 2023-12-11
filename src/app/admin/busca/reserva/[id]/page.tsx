'use client'

import 'tailwindcss/tailwind.css'
import { Search } from 'lucide-react'
import SideBarAdmin from '../../../../../components/ui/sideBarAdmin'
import { useParams, useRouter } from "next/navigation";

import {useState, useEffect} from 'react';
import { getReserva } from '@/app/api/getReservas';
import { deleteReserva } from '@/app/api/deleteReserva';
export default function reservas(){
   
   
    const param = useParams()
    const paginaId = param
    const {push} = useRouter();
    const editar =(classe: string, parametro: string) => {
        push(`/admin/editar/${classe}/${parametro}`)
    }



    const [busca, setBusca] = useState('')
    const setValueSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusca(event.target.value)
        console.log(busca)
    }

    const click = () => {
        push(`/admin/busca/reserva/${busca}`)
    }

    const deletar = (id: any) =>{
        deleteReserva(id)
    }

    const [modelsComponents, setModelsComponents] = useState<JSX.Element[]>([]);
    
    useEffect(() => {
        async function getdados() {
            const data = await getReserva(`?cliente__cpf=${paginaId.id}`);
        
            try{ 
                if(!data) throw('error')
                let value = data.data
                setModelsComponents(value.map((reserva) => (
                    <div key={reserva.id} className='border  border-slate-950 p-2 w-fit rounded-md hover:scale-105'>
                        <h2 className='text-center font-bold'>Reservas</h2>
                        <p>Data: {reserva.data}</p>
                        <p>Horário: {reserva.hora}</p>
                        <p>Modelo: {reserva.model}</p>
                        <p>Marca: {reserva.marca}</p>
                        <p>Nome: {reserva.cliente_firstName}</p>
                        <p>Endereço: {reserva.endereco}</p>
                        <p>Email: {reserva.cliente_email}</p>
                        <p>Telefone: {reserva.telefone}</p>

                        <div className='flex   justify-center mt-4'>
                            <button  className='p-2  bg-zinc-300  rounded-md' type='button' onClick={() => deletar(reserva.id)}>Deletar</button>
                        </div>
                    </div>
                    


                  
                )));
            }  catch{
                setModelsComponents([<p className='text-red-500 text-center'>nenhum item encontrado</p>]);
            }
        }

        getdados();
    }, []);













    return(
        <div className='flex min-h-screen text-black'>
            <div className='w-1/5 bg-black text-center'>
                <a href='/admin/'>
                
                    <h1 className='  text-white border-b border-gray-500 p-2'>Admin</h1>
                </a>
                <SideBarAdmin />
            </div>
            <div className='w-4/5 bg-zinc-300  min-h-screen'>
                <h1 className='  text-black text-center border-b border-gray-500 p-2 font-extrabold'>AutoTech</h1>
                <div className=' bg-white m-5 rounded-xl min-h-40'>

                <div className=' h-fit border-b border-gray-500 flex items-center justify-between'>
                    <p className=' p-2'>Reservas</p>
                    
                    <div className='  inline-block'>
                        <label>
                            <div className='flex'>
                                <input type='text' onChange={setValueSearch} className='bg-zinc-300 rounded-s-xl'/>
                                <button onClick={click} className='bg-zinc-300 rounded-e-xl p-1'>
                                    <Search/>
                                </button>
                            </div>
                        </label>
                    </div>


                    <div>

                    </div>
                </div>

                    <div className='flex justify-center space-x-32'>
                        <div className='grid grid-cols-3 gap-10 p-2 '>
                            {
                                
                                   modelsComponents
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}