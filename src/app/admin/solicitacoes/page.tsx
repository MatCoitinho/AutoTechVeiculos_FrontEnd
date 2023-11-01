'use client'

import 'tailwindcss/tailwind.css'
import { Search } from 'lucide-react'
import SideBarAdmin from '../../../components/ui/sideBarAdmin'
import { useEffect, useState } from 'react'
import { getSolicitacoes } from '@/app/api/getSolicitacoes'


export default function solicitacoes(){
 
   
    
    const [modelsComponents, setModelsComponents] = useState<JSX.Element[]>([]);

    useEffect(() => {
        async function getdados() {
            const data = await getSolicitacoes(false);
        
            try{ 
                if(!data) throw('error')
                let value = data.data
                setModelsComponents(value.map((solicitacao_) => (
                    
                    <div key={solicitacao_.id} className='border  border-slate-950 justify-around w-11/12 rounded-md inline-flex text-center m-3'>
                        <p className='flex items-center justify-center  border-r-2 p-2'>{solicitacao_.dono_cpf}</p>
                        <p className='flex items-center justify-center  border-r-2 p-2'>{solicitacao_.marca}</p>
                        <p className='flex items-center justify-center  border-r-2 p-2'>{solicitacao_.modelo}</p>
                        <p className='flex items-center justify-center  border-r-2 p-2'>{solicitacao_.ano}</p>
                        <p className='flex items-center justify-center  border-r-2 p-2'>{solicitacao_.combustivel}</p>
                        <p className='flex items-center justify-center  border-r-2 p-2'>{solicitacao_.servico}</p>



                <div className='flex   justify-between'>
                    <button  className='p-2   m-2 bg-zinc-300  rounded-md ' type='button'>Aprovar</button>
                    <button  className='p-2 m-2 bg-zinc-300  rounded-md' type='button'>Negar</button>
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
                    <p className=' p-2'>Solicitações</p>
                    
                    <div className='  inline-block'>
                       
                    </div>


                    <button  className='m-3 p-1 bg-blue-500  text-white rounded-xl  ' type='button'>
                        <a href='http://localhost:3000/admin/aprovados'>
                            Aprovados
                        </a>  
                    </button>
                </div>

                    <div className='justify-center space-x-32'>
                        <div className='p-2'>
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