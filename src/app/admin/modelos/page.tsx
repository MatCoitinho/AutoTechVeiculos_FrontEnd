'use client'

import 'tailwindcss/tailwind.css'
import { Search } from 'lucide-react'
import SideBarAdmin from '../../../components/ui/sideBarAdmin'
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import {useState} from 'react';
import { getModelo } from '@/app/api/getModelos';


    
export default function modelos(){
    
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
        alert(busca);
    }

    const [modelsComponents, setModelsComponents] = useState<JSX.Element[]>([]);

    useEffect(() => {
        async function getdados() {
            const data = await getModelo('');
        
            try{ 
                if(!data) throw('error')
                let value = data.data
                setModelsComponents(value.map((model) => (
                    <div key={model.id} className='border  border-slate-950 p-2 w-fit rounded-md hover:scale-105'>
                <h2 className='text-center font-bold'>{model.model}</h2>
                <p>Marca: {model.marca}</p>
                <p>Ano: {model.ano}</p>
                <p>Combustivel: {model.tipoCombustivel}</p>
                <p>Portas: {model.qtdPortas}</p>
                <p>Cambio: {model.cambio == true? 'Automatico':'Manual'}</p>
                <p>Categoria: {model.categoria}</p>
                <div className='flex   justify-between mt-4'>
                    <button  className='p-2  bg-zinc-300 rounded-md ' onClick={() => editar('modelo', String(model.id))} type='button'>Editar</button>
                    <button  className='p-2  bg-zinc-300  rounded-md' type='button'>Deletar</button>
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
                    <p className=' p-2'>Modelos</p>
                    
                    <div className='  inline-block'>
                        <label>
                            <div className='flex'>
                                <input type='text' onChange={setValueSearch} maxLength={25} className='bg-zinc-300 rounded-s-xl'/>
                                <button className='bg-zinc-300 rounded-e-xl p-1' onClick={click}>
                                    <Search/>
                                </button>
                            </div>
                        </label>
                    </div>


                    <button  className='m-3 p-1 bg-blue-500  text-white rounded-xl  ' type='button'>
                        <a href='http://localhost:3000/admin/cadastrar/modelos'>
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