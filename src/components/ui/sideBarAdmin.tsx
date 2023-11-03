import { Car, CarFront, User, Bell, Megaphone, Library, LibrarySquare } from 'lucide-react';
import Link  from 'next/link';


export default function BarraLaretal(){
    return(
        <span className=' text-white inline-block'>
                    <div>
                    <a href="http://localhost:3000/admin/anuncios" className='flex mt-4   text-xl'>
                        <Library />
                       <p className='pl-3'>Anúncios</p> 
                    </a>
                    </div>
                    <div >
                    <a href="http://localhost:3000/admin/modelos" className='flex mt-4 text-xl'>
                        <Car />
                       <p className='pl-3'>Modelos</p> 
                    </a>
                    </div>
                    <div >
                    <a href="http://localhost:3000/admin/veiculos" className='flex mt-4 text-xl'>
                        <CarFront />
                        <p className='pl-3'>Veiculos</p> 
                    </a>
                    </div>
                    <div >
                    <a href="http://localhost:3000/admin/clientes" className='flex mt-4 text-xl'>
                        <User />
                        <p className='pl-3'>Clientes</p>
                    </a>
                    </div>
                    <div >
                    <a href="http://localhost:3000/admin/solicitacoes" className='flex mt-4 text-xl'>
                        <Bell />
                        <p className='pl-3'>Solicitações</p>
                    </a>
                    </div>
                    <div >
                    <a href="http://localhost:3000/admin/cadastrar/anuncio" className='flex mt-4 text-xl'>
                        <Megaphone/>
                        <p className='pl-3'>Anunciar</p>
                    </a>
                    </div>
                    <div >
                    <a href="http://localhost:3000/admin/reservas" className='flex mt-4 text-xl'>
                        <LibrarySquare/>
                        <p className='pl-3'>Reservas</p>
                    </a>
                    </div>
                    <div >
                    <a href="http://localhost:3000/admin/alugueis" className='flex mt-4 text-xl'>
                        <LibrarySquare/>
                        <p className='pl-3'>Alugueis</p>
                    </a>
                    </div>
                </span>
    )
}