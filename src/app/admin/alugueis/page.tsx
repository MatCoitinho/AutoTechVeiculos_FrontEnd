'use client'

import 'tailwindcss/tailwind.css'
import { Search } from 'lucide-react'
import SideBarAdmin from '../../../components/ui/sideBarAdmin'
import { useRouter } from "next/navigation";

import {useState} from 'react';

export default function alugueis(){
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

    


//alugueis
const alugueis1 = [
        {
            "id": 1,
            "cliente_email": "admin@example.com",
            "cliente_firstName": "Matheus",
            "cliente_lastName": "Coito",
            "cpf": "20918921222",
            "telefone": "44332123344",
            "endereco": "Rua renegados, 69",
            "tipoCombustivel": "gasolina",
            "model": "Onix",
            "marca": "Chevrolet",
            "ano": "2019",
            "cambio": "True",
            "categoria": "sedan",
            "qtdPortas": "4",
            "placa": "mio1234",
            "dataInicio": "2023-12-20",
            "dataDev": "2023-12-25",
            "cliente": 1,
            "veiculo": 1
        }
    ]
    let modelsComponents;
    try{ 
        if(alugueis1.length<1) throw('error');
        modelsComponents = alugueis1.map((aluguel, index) => (
            <div key={index} className='border  border-slate-950 p-2 w-fit rounded-md hover:scale-105'>
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
                    <button  className='p-2  bg-zinc-300 rounded-md ' onClick={() => editar('alugel', String(aluguel.id))} type='button'>Deletar</button>
                </div>
            </div>
    ))
    } catch{
        modelsComponents =<p className='  text-red-500 text-center'>nenhum item encontrado</p> 

    }




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