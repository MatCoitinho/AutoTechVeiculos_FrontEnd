'use client'

import 'tailwindcss/tailwind.css'
import { Search } from 'lucide-react'
import SideBarAdmin from '../../../components/ui/sideBarAdmin'
import { useRouter } from "next/navigation";
import {useEffect, useState} from 'react';
import { getAnuncio } from '@/app/api/getAnuncio';
import { getSolicitacoes } from '@/app/api/getSolicitacoes';
import { deleteSolicitacao } from '@/app/api/deleteSolicitacoes';
import { parseCookies } from 'nookies';



    
export default function solicitacoes_(){

    let email = localStorage.getItem('@autotech:user')
    let vaule = email?.replace(/["/]/g, '');
    //let vaule = await recoverUserInformation()
    const {'AutoTech_token': token} = parseCookies()
    const router = useRouter()
    let controle = true
    if(!token || vaule !== 'admin@example.com'){
        controle = false
        router.push('/')
    }

    const {push} = useRouter();
    const editar =(classe: string, parametro: string) => {
        push(`/admin/${classe}/${parametro}`)
    }



    const [busca, setBusca] = useState('')
    const setValueSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusca(event.target.value)
        console.log(busca)
    }

    const click = () => {
        alert(busca);
    }
    const deletar = (id: any) =>{
        deleteSolicitacao(String(id))
    }
    const [modelsComponents, setModelsComponents] = useState<JSX.Element[]>([]);

    useEffect(() => {
        async function getdados() {
            const data = await getSolicitacoes(true);
        
            try{ 
                if(!data) throw('error')
                let value = data.data
                setModelsComponents(value.map((solicitacoes) => (
                    <div key={solicitacoes.id} className='border  border-slate-950 p-2  rounded-md hover:scale-105 text-center'>
                    <h2 className='text-center font-bold'>{solicitacoes.modelo}</h2>
                    <p>Ano: {solicitacoes.ano}</p>
                    <p>Marca: {solicitacoes.marca}</p>
                    <p>Combustível: {solicitacoes.combustivel}</p>
                    <p>Nome: {solicitacoes.dono_name}</p>
                    <p>CPF: {solicitacoes.dono_cpf}</p>
                    <p>Email: {solicitacoes.dono_email}</p>
                    <p>Telefone: {solicitacoes.dono_telefone    }</p>
                    <div className='flex  justify-center mt-4'>
                        <button  className='p-2  bg-zinc-300 rounded-md ' onClick={() => deletar(solicitacoes.id)} type='button'>Concluido</button>
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
                    <p className=' p-2'>Aprovados</p>
                    
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