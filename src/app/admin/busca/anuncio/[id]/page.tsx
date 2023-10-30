'use client'

import 'tailwindcss/tailwind.css'
import { Search } from 'lucide-react'
import SideBarAdmin from '../../../../../components/ui/sideBarAdmin'
import { useRouter } from "next/navigation";

import { useState, useEffect } from 'react';

import { getAnuncio } from '@/app/api/getAnuncio';
import { deleteAnuncio } from '@/app/api/deleteAnuncio';






export default function anuncios(){
   
    const deletar = (id: any)=>{
        deleteAnuncio(id)
    }
    const [modelsComponents, setModelsComponents] = useState<JSX.Element[]>([]);

    useEffect(() => {
        async function getdados() {
            const anuncios1 = await getAnuncio('');
        
            try{ 
                if(!anuncios1) throw('error')
                let value = anuncios1.data
                setModelsComponents(value.map((anuncio) => (
                    
                    <div key={anuncio.id} className='border  border-slate-950 p-2 w-fit rounded-md hover:scale-105'>
                        <h2 className='text-center font-bold'>{anuncio.modelo}</h2>
                        <p>Marca: {anuncio.marca}</p>
                        <p>Serviço: {anuncio.servico == true? 'Venda':'Aluguel'}</p>
                        <p>Destaque: {anuncio.destaque == true? 'Ativo':'Inativo'}</p>
                        <p>Pontos: {anuncio.pontos}</p>
                        <p>Preço: {anuncio.preco}</p>
                        <div className='flex   justify-between mt-4'>
                            <button  className='p-2  bg-zinc-300 rounded-md m-1' onClick={() => editar('anuncio', String(anuncio.id))} type='button'>Editar</button>
                            <button  className='p-2  bg-zinc-300  rounded-md m-1' type='button' onClick={() => deletar(anuncio.id)}>Deletar</button>
                        </div>
                    </div>
                )));
            }  catch{
                setModelsComponents([<p className='text-red-500 text-center'>nenhum item encontrado</p>]);
            }
        }

        getdados();
    }, []);

    

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
        push(`/admin/busca/anuncio/${busca}`)
    }


 





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
                    <p className=' p-2'>Anuncio</p>
                    
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


                    <button  className='m-3 p-1 bg-blue-500  text-white rounded-xl  ' type='button'>
                        <a href='http://localhost:3000/admin/cadastrar/anuncio'>
                            Adicionar
                        </a>  
                    </button>
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