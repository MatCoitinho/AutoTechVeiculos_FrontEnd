'use client'

import 'tailwindcss/tailwind.css'
import { Search } from 'lucide-react'
import SideBarAdmin from '../../../components/ui/sideBarAdmin'
import { useRouter } from "next/navigation";

import {useState, useEffect} from 'react';
import {getAluguel} from '../../api/getAlugueis' 
import { deletealuguel } from '@/app/api/deleteAluguel';
import { parseCookies } from 'nookies';


export default function alugueis(){
    const {push} = useRouter();
    const editar =(classe: string, parametro: string) => {
        push(`/admin/editar/${classe}/${parametro}`)
    }

    // let email = localStorage.getItem('@autotech:user')
    // let vaule = email?.replace(/["/]/g, '');
    //let vaule = await recoverUserInformation()
    const {'AutoTech_token': token} = parseCookies()
    const router = useRouter()
    let controle = true
    if(!token){
        controle = false
        router.push('/')
    }

    const [busca, setBusca] = useState('')
    const setValueSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusca(event.target.value)
        console.log(busca)
    }

    const click = () => {
        alert(busca);
    }

    

    const deletar = (id: any)=>{
        deletealuguel(id)
    }
    const [modelsComponents, setModelsComponents] = useState<JSX.Element[]>([]);

    useEffect(() => {
        async function getdados() {
            const data = await getAluguel('');
        
            try{ 
                if(!data) throw('error')
                let value = data.data
                setModelsComponents(value.map((aluguel) => (
                    <div key={aluguel.id} className='border  border-slate-950 p-2 w-fit rounded-md hover:scale-105'>
                    <h2 className='text-center font-bold'>Aluguel</h2>
                    <p>Retirada: {aluguel.dataInicio}</p>
                    <p>Devolução: {aluguel.dataDev}</p>
                    <p>Modelo: {aluguel.model}</p>
                    <p>Marca: {aluguel.marca}</p>
                    <p>Nome: {aluguel.cliente_firstName}</p>
                    <p>Endereço: {aluguel.endereco}</p>
                    <p>Email: {aluguel.cliente_email}</p>
                    <p>Telefone: {aluguel.telefone}</p>
                    
                <div className='flex   justify-center mt-4'>
                    <button  className='p-2  bg-zinc-300  rounded-md' type='button' onClick={() => deletar(aluguel.id)}>Deletar</button>
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
        <div className='flex min-h-screen  text-black'>
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
                    <p className=' p-2'>Alugueis</p>
                    
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