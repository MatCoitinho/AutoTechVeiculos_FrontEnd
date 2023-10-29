'use client'
import 'tailwindcss/tailwind.css'
import SideBarAdmin from '../../../../components/ui/sideBarAdmin'
import { useState } from 'react'
export default function cadastrarVeiculos(){


    const [inputs, setInputs] = useState({
        placa: '',
        quilometragem: '',
        cor: '',
        estado: 'Novo',
        ano: '',
        modelo: '',
        cpf: ''
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
    const click = () =>{
       
        console.log(inputs)
        
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
                        <p className=' p-2 text-center text-lg font-bold'>Cadastro Veiculo</p>
                    </div>
                    



                    <form>
                        <div className='flex mt-10 justify-center p-5'>
                            <div className='grid grid-cols-2 gap-4'>
                                
                                <div className='w-1/2'>
                                    <label>
                                        Placa
                                        <div>
                                            <input type='text' onChange={getInputs} name='placa' required className='bg-zinc-300 flex  w-96 p-3'/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Quilometragem
                                        <div>
                                            <input type='number' onChange={getInputs} name='quilometragem' required className='bg-zinc-300 flex w-96 p-3'/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Cor
                                        <div>
                                            <input type='text'onChange={getInputs} required name='cor' className='bg-zinc-300 flex w-96 p-3'/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Estado
                                        <select name='estado' onChange={getInputsSelect} defaultValue={'Novo'} className='bg-zinc-300 flex w-96 p-3 text-center'>
                                            <option value={'Novo'}>Novo</option>
                                            <option value={'usado'}>Usado</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Ano
                                        <div>
                                            <input type='number' name='ano' onChange={getInputs} required className='bg-zinc-300 flex w-96 p-3'/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Modelo
                                        <div>
                                            <input type='text' name='modelo' onChange={getInputs} required className='bg-zinc-300 flex w-96 p-3'/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        CPF Dono
                                        <div>
                                            <input type='text' name='cpf' onChange={getInputs} required className='bg-zinc-300 flex w-96 p-3'/>
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
    )
}