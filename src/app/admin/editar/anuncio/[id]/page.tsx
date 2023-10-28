'use client'
import 'tailwindcss/tailwind.css'
import SideBarAdmin from '../../../../../components/ui/sideBarAdmin'
import { useState } from 'react'

function cadastrarAnuncio(){

    const [inputs, setInputs] = useState({
        placa: '',
        preco: '',
        destaque: '',
        servico: '',
        descricao: '',
        image1:''
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
    
    const click = () => {
        console.log(inputs)
    }
    const [content, setContent ] = useState(<p className=' text-7xl'>+</p>)
    const [content2, setContent2 ] = useState(<p className=' text-7xl'>+</p>)

    const leImgam = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.files
        })
        let teste = event.target.files
        if(teste)
            setContent(<p>{teste[0].name}</p>)
      };

      const leImgam2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.files
        })
        let teste = event.target.files
        if(teste)
            setContent2(<p>{teste[0].name}</p>)
      };
      
      

let valor = true

    return(
        valor?
        <div className='flex min-h-screen '>
            <div className='w-1/5 bg-black text-center'>
                <a href='/admin/'>
                
                    <h1 className='  text-white border-b border-gray-500 p-2'>Admin</h1>
                </a>
                <SideBarAdmin />
            </div>

            <div className='w-4/5 bg-zinc-300  min-h-screen'>
                <h1 className='  text-black text-center border-b border-gray-500 p-2 font-extrabold'>AutoTech</h1>
                <div className=' bg-white m-5 rounded-xl '>
                    <div className=' h-fit border-b border-gray-500 items-center justify-between'>
                        <p className=' p-2 text-center text-lg font-bold'>Cadastro Anuncio</p>
                    </div>
                    



                    <form>
                    <div className='flex mt-10 justify-center p-5'>
                        
                        <div className='grid grid-cols-2 gap-4 '>
                        <div className='flex justify-center items-center'>
                    
                                <label className='w-44 h-44 flex flex-col items-center px-4 py-6 bg-zinc-300 rounded-lg  cursor-pointe hover:text-white'>
                                    Imagem 1
                                    <div>
                                    <input type='file'name='image1' onChange={leImgam} accept='image/*' required className='bg-zinc-300 hidden  '/>
                                        {content}
                                    </div>
                                </label>
                            </div>
                            <div className='flex justify-center items-center'>
                                <label className='w-44 h-44 flex flex-col items-center px-4 py-6 bg-zinc-300 rounded-lg tracking-wide  cursor-pointe hover:text-white'>
                                    Imagem 2
                                    <div>
                                    <input type='file' name='image2' onChange={leImgam2} accept='image/*' required className='bg-zinc-300 hidden  '/>
                                    {content2}
                                    </div>
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label>
                                    Placa
                                    <div>
                                        <input onChange={getInputs} type='text' name='placa' required className='bg-zinc-300 flex  w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Preço
                                    <div>
                                        <input type='Number' onChange={getInputs} name='preco' required className='bg-zinc-300 flex w-96 p-3'/>
                                    </div>
                                </label>
                            </div>

                            
                            <div>
                                <label>
                                    Destaque
                                    <select onChange={getInputsSelect} name='destaque' className='bg-zinc-300 flex w-96 p-3 text-center'>
                                        <option value={'Ativado'}>Ativado</option>
                                        <option value={'Desativado'}>Desativado</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Serviço
                                    <select name='servico' onChange={getInputsSelect} defaultValue={'Aluguel'} className='bg-zinc-300 flex w-96 p-3 text-center'>
                                        <option value={'Aluguel'}>Aluguel</option>
                                        <option value={'Reserva'}>Reserva</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Descrição
                                    <div>
                                        <textarea id="descricao" onChange={leImgam} name="descricao" maxLength={200} className='bg-zinc-300 flex w-96 p-3 h-36 resize-none'></textarea>
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
        </div>:<p>404</p>
    )
}
export default cadastrarAnuncio