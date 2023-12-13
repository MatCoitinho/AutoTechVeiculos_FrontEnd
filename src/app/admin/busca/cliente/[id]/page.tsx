'use client'

import 'tailwindcss/tailwind.css'
import { Search } from 'lucide-react'
import SideBarAdmin from '../../../../../components/ui/sideBarAdmin'
import { useParams, useRouter } from "next/navigation";

import {useState, useEffect} from 'react';
import { getCliente } from '@/app/api/getCliente';
import { deleteClient } from '@/app/api/deleteCliente';
import { parseCookies } from 'nookies';

export default function Clientes(){
    // let email = localStorage.getItem('@autotech:user')
    // let vaule = email?.replace(/["/]/g, '');
    //let vaule = await recoverUserInformation()
    const {'Admim_autoTech_token': token} = parseCookies()
    const router = useRouter()
    let controle = true
    if(!token ){
        controle = false
        router.push('/')
    }



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
        push(`/admin/busca/cliente/${busca}`)
        
    }

    const deletar = (id: any)=>{
        deleteClient(id)    
    }

    const [modelsComponents, setModelsComponents] = useState<JSX.Element[]>([]);

    useEffect(() => {
        async function getdados() {
            const data = await getCliente(`?cpf=${paginaId.id}`);
        
            try{ 
                if(!data) throw('error')
                let value = data.data
                setModelsComponents(value.map((clientes) => (
                <div key={clientes.id} className='border  border-slate-950 p-2 w-56 rounded-md hover:scale-105'>
                    <h2 className='text-center font-bold'>{clientes.cliente_firstName}</h2>
                    <p className=' text-xs  max-w-xs'>Nome: {clientes.cliente_firstName}</p>
                    <p className=' text-xs  max-w-xs'>E-mail: {clientes.cliente_email}</p>
                    <p>CPF: {clientes.cpf}</p>
                    <p>Endereço: {clientes.endereco}</p>
                    <p>Telefone: {clientes.telefone}</p>
                    <div className='flex  justify-center mt-4'>
                        <button  className='p-2  bg-zinc-300  rounded-md' type='button' onClick={() => deletar(clientes.id)}>Deletar</button>
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
                    <p className=' p-2'>Clientes</p>

                    <div className='  inline-block'>
                        <label>
                            <div className='flex m-3'>
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