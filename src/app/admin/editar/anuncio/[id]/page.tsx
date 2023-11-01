'use client'
import 'tailwindcss/tailwind.css'
import SideBarAdmin from '../../../../../components/ui/sideBarAdmin'
import { useState } from 'react'
import { storage } from '@/lib/uploadImage'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { error } from 'console'

import { createAnoucement } from '@/app/api/createAnuncio'
import {  useRouter } from 'next/navigation'
import { patchAnuncio } from '@/app/api/patchAnuncio'



type Carro = {
    id: number;
    modelo: string;
    marca: string;
    cambio: boolean;
    ano: string;
    combustivel: string;
    placa: string;
    cor: string;
    categoria: string;
    status: boolean;
    dono: string;
    pontos: number;
    img1: string;
    img2: string;
    descricao: string;
    destaque: boolean;
    preco: number;
    servico: boolean;
    veiculo: number;
};

let valores: Carro;
let controle: boolean = true;
export function getdadosAnuncio(value: Carro){
    valores = value
    controle = false;
    console.log(valores)
}





export default function cadastrarAnuncio(){

        const router = useRouter()
        if(controle)
            router.push('/admin')
    

    const [inputs, setInputs] = useState({
        placa: valores?.placa,
        preco: valores?.preco,
        destaque: valores?.destaque,
        servico: valores?.servico,
        descricao: valores?.descricao,
        image1:valores?.img1,
        image2:valores?.img2
    })

    const getInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }
    const getInputsText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }
    const getInputsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setInputs({
            ...inputs,
            [event.target.name]: value === '1' ? 1 : 0
        });
    };
    
    
    const click = () => {
        let anuncio = {
            pontos: 0,
            img1:inputs.image1,
            img2:inputs.image2,
            descricao: inputs.descricao,
            placa: inputs.placa,
            destaque: Boolean(inputs.destaque),
            preco: Number(inputs.preco),
            servico: Boolean(inputs.servico),
        }
        console.log(anuncio)
        patchAnuncio(String(valores?.id), anuncio);
    

    }
    const [content, setContent ] = useState(<p className=' text-7xl'>+</p>)
    const [content2, setContent2 ] = useState(<p className=' text-7xl'>+</p>)

    const leImgam = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        let file

        if(files)
            file = files[0]
        if(!file) return

        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
            },
            error => {
                alert(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( url =>{
                    console.log(url)
                    setInputs({
                        ...inputs,
                        [event.target.name]: url
                    })
                }
                )
            }
        )
        if(file)
            setContent(<p>{file.name}</p>)
        
      };

      const leImgam2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        let file

        if(files)
            file = files[0]
        if(!file) return

        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
            },
            error => {
                alert(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( url =>{
                    console.log(url)
                    setInputs({
                        ...inputs,
                        [event.target.name]: url
                    })
                }
                )
            }
        )
        if(file)
            setContent2(<p>{file.name}</p>)
        
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
                                        <input defaultValue={valores.placa } onChange={getInputs} type='text' name='placa' required className='bg-zinc-300 flex  w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Preço
                                    <div>
                                        <input type='Number' defaultValue={valores.preco} onChange={getInputs} name='preco' required className='bg-zinc-300 flex w-96 p-3'/>
                                    </div>
                                </label>
                            </div>

                            
                            <div>
                                <label>
                                    Destaque
                                    <select onChange={getInputsSelect} defaultValue={valores.destaque === true? 1:0} name='destaque' className='bg-zinc-300 flex w-96 p-3 text-center'>
                                        <option value={0}>Desativado</option>
                                        <option value={1}>Ativado</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Serviço
                                    <select name='servico' onChange={getInputsSelect} defaultValue={valores.servico === true? 1:0} className='bg-zinc-300 flex w-96 p-3 text-center'>
                                        <option value={0}>Reserva</option>
                                        <option value={1}>Aluguel</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Descrição
                                    <div>
                                        <textarea id="descricao" defaultValue={valores.descricao} onChange={getInputsText} name="descricao" maxLength={200} className='bg-zinc-300 flex w-96 p-3 h-36 resize-none'></textarea>
                                    </div>
                                </label>
                            </div>      
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center mt-4'>
                            <button onClick={click} className='m-3 p-3 w-1/4 bg-blue-500 text-white rounded-xl' type='button'>Cadastrar</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>:
        <h1 className=' w-screen h-screen bg-black text-white items-center text-6xl justify-center font-extrabold'>404</h1>
    )
}
