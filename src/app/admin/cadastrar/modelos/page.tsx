'use client'
import 'tailwindcss/tailwind.css'
import SideBarAdmin from '../../../../components/ui/sideBarAdmin'
import { useState } from 'react'
import { createModel } from '@/app/api/createModel'
export default function cadastrarModelos(){
    const [inputs, setInputs] = useState({
        marca: '',
        modelo: '',
        ano: '',
        portas: 2,
        combustivel: 'gasolina',
        cambio: 1,
        categoria: 'compacto'
    })

    const getInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }
    const getInputsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    const getInputsSelectBool = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setInputs({
            ...inputs,
            [event.target.name]: value === '1' ? 1 : 0 // Converte a string para um número
        });
    };
    

    const click = () =>{
        let modelo = {
            tipoCombustivel: inputs.combustivel,
            model: inputs.modelo,
            marca: inputs.marca,
            ano: Number(inputs.ano),
            cambio: Boolean(inputs.cambio),
            categoria: inputs.categoria,
            qtdPortas: Number(inputs.portas),
        }
        console.log(modelo)
        createModel(modelo)

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
                <div className=' bg-white m-5 rounded-xl  h-screen'>
                    <div className=' h-fit border-b border-gray-500 items-center justify-between'>
                        <p className=' p-2 text-center text-lg font-bold'>Cadastro Modelo</p>
                    </div>
                    



                    <form>

                    <div className='flex mt-10 justify-center p-5'>
                        <div className='grid grid-cols-2 gap-4'>
                            
                            <div className='w-1/2'>
                                <label>
                                    Marca
                                    <div>
                                        <input type='text' onChange={getInputs} name='marca' required={true} className='bg-zinc-300 flex  w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Modelo
                                    <div>
                                        <input type='text'  onChange={getInputs} name='modelo' required className='bg-zinc-300 flex w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Ano
                                    <div>
                                        <input type='Number' onChange={getInputs} name='ano' required className='bg-zinc-300 flex w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Quantidade de Portas
                                    <select name='portas' defaultValue={2} onChange={getInputsSelect} className='bg-zinc-300 flex w-96 p-3 text-center'>
                                        <option value={2}>Duas</option>
                                        <option value={4}>Quatro</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Combustivel
                                    <select name='combustivel'  defaultValue={'gasolina'} onChange={getInputsSelect} className='bg-zinc-300 flex w-96 p-3 text-center'>
                                        <option value={'gasolina'}>Gasolina</option>
                                        <option value={'alcool'}>Alcool</option>
                                        <option value={'eletrico'}>Elétrico</option>
                                        <option value={'hibrido'}>Hibrido</option>
                                        <option value={'flex'}>Flex</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Câmbio
                                    <select name='cambio' defaultValue={'automatico'} onChange={getInputsSelectBool} className='bg-zinc-300 flex w-96 p-3 text-center'>
                                        <option value={1}>Automático</option>
                                        <option value={0}>Manual</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Categoria
                                    <select name='categoria' defaultValue={'compacto'} onChange={getInputsSelect} className='bg-zinc-300 flex w-96 p-3 text-center'>
                                        <option value={'compacto'}>Compacto</option>
                                        <option value={'sedan'}>Sedan</option>
                                        <option value={'suv'}>SUV</option>
                                        <option value={'hatchback'}>Hatchback</option>
                                        <option value={'picape'}>Picape</option>
                                        <option value={'esportivo'}>Esportivo</option>

                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='flex justify-center mt-4'>
                        <button onClick={click} type='button' className='m p-3 w-1/4 bg-blue-500 text-white rounded-xl'>Cadastrar</button>
                    </div>

                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}