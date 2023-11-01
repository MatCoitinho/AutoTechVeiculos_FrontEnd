'use client'
import 'tailwindcss/tailwind.css'
import SideBarAdmin from '../../../../../components/ui/sideBarAdmin'
import { useState, useEffect, ReactComponentElement } from 'react'
import { number } from 'zod'
import { createVehicle } from '@/app/api/createVehicle'
import { useParams } from 'next/navigation'
import { getAnuncio } from '@/app/api/getAnuncio'
import { getVeiculo } from '@/app/api/getVeiculos'
import { patchVeiculo } from '@/app/api/patchVeiculos'

type Carro = {
    id: number;
tipoCombustivel: string;
model: string;
marca: string;
ano: string;
cambio: boolean;
categoria: string;
qtdPortas: number;
dono_cpf: string;
placa: string;
quilometragem: string;
status: boolean;
cor: string;
modelo: number;
dono: number;
};
let valores: Carro;
let controle: boolean = true;
export function getdados(value: Carro){
    valores = value
    controle = false
    console.log(valores)
}


export default function cadastrarVeiculos(){
    const param = useParams()
    const paginaId = param

    const [inputs, setInputs] = useState({
        placa: valores?.placa,
        quilometragem: valores?.quilometragem,
        cor: valores?.cor,
        cpf: valores?.dono_cpf
    })

    
    

    const getInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }
    const getInputsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setInputs({
            ...inputs,
            [event.target.name]: value === '1' ? 1 : 0 // Converte a string para um número
        });
    }

    const click = () =>{
       let veiculos = {
        placa: inputs.placa,
        quilometragem: inputs.quilometragem,
        cor: inputs.cor,
       }
       console.log(veiculos)
        patchVeiculo(String(paginaId.id) ,veiculos)
    }
    


    return(
        valores?
        <div className='flex min-h-screen text-black'>
            <div className='w-1/5 bg-black text-center'>
                <a href='/admin/'>
                
                    <h1 className='  text-white border-b border-gray-500 p-2'>Admin</h1>
                </a>
                <SideBarAdmin />
            </div>

            <div className='w-4/5 bg-zinc-300  min-h-screen'>
                <h1 className='  text-black text-center border-b border-gray-500 p-2 font-extrabold'>AutoTech</h1>
                <div className=' bg-white m-5 rounded-xl  h-screen'>
                    <div className=' h-fit border-b border-gray-500 items-center justify-between'>
                        <p className=' p-2 text-center text-lg font-bold'>Cadastro Veiculo</p>
                    </div>
                    

                    <form>
                        <div className='flex mt-10 justify-center p-5'>
                            <div className='grid grid-cols-2 gap-4'>
                                
                                <div className='w-1/2'>
                                    <label>
                                        Placa
                                        <div>
                                            <input type='text' defaultValue={valores.placa} onChange={getInputs} maxLength={7} name='placa' required className='bg-zinc-300 flex  w-96 p-3'/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Quilometragem
                                        <div>
                                            <input type='number' defaultValue={valores.quilometragem} onChange={getInputs} name='quilometragem' required className='bg-zinc-300 flex w-96 p-3'/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Cor
                                        <div>
                                            <input type='text'onChange={getInputs}  defaultValue={valores.cor} required name='cor' className='bg-zinc-300 flex w-96 p-3'/>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>

                        <div className='flex justify-center mt-4'>
                            <button onClick={click} className='m p-3 w-1/4 bg-blue-500 text-white rounded-xl' type='button'>Cadastrar</button>
                        </div>
                    </div>
                    </form>

                    









                </div>
            </div>
        </div>
        :
        <h1 className=' w-screen h-screen bg-black text-white items-center text-6xl justify-center font-extrabold'>404</h1>

    )
}