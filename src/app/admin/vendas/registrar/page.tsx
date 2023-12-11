'use client'
import 'tailwindcss/tailwind.css'
import SideBarAdmin from '../../../../components/ui/sideBarAdmin'
import { useState } from 'react'
import { storage } from '@/lib/uploadImage'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { error } from 'console'

import { createVenda } from '@/app/api/createVenda'
import { getdadosAnuncio } from '../../editar/anuncio/[id]/page'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/navigation'







function cadastrarAnuncio(){

    // let email = localStorage.getItem('@autotech:user')
    // let vaule = email?.replace(/["/]/g, '');
    //let vaule = await recoverUserInformation()
    const {'Admim_autoTech_token': token} = parseCookies()
    const router = useRouter()
    let controle = true
    if(!token){
        controle = false
        router.push('/')
    }


    const [inputs, setInputs] = useState({
        cpf:  '',
        nome: '',
        placa: '',
        valor: '',
        contato: ''
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
        let venda = {
            cpf:  inputs.cpf,
            nome: inputs.nome,
            placa: inputs.placa,
            valor: Number(inputs.valor),
            contato: inputs.contato
        }
        console.log(venda)
        createVenda(venda);
    

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
      
      

let valor = true

    return(
        valor?
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
                        <p className=' p-2 text-center text-lg font-bold'>Registrar a venda</p>
                    </div>
                    



                    <form>
                    <div className='flex mt-10 justify-center p-5'>
                        
                        <div className='grid grid-cols-2 gap-4 '>
                            <div>
                                <label>
                                    CPF
                                    <div>
                                        <input type='text' onChange={getInputs} name='cpf' required className='bg-zinc-300 flex w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Nome
                                    <div>
                                        <input type='text' onChange={getInputs} name='nome' required className='bg-zinc-300 flex w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Placa
                                    <div>
                                        <input type='text' onChange={getInputs} name='placa' required className='bg-zinc-300 flex w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Valor
                                    <div>
                                        <input type='Number' onChange={getInputs} name='valor' required className='bg-zinc-300 flex w-96 p-3'/>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Contato
                                    <div>
                                        <input type='text' onChange={getInputs} name='contato' required className='bg-zinc-300 flex w-96 p-3'/>
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
        </div>:<p>404</p>
    )
}
export default cadastrarAnuncio