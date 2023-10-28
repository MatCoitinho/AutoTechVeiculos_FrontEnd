import 'tailwindcss/tailwind.css'
import SideBarAdmin from '../../components/ui/sideBarAdmin'

export default function admin(){
    return(
        <div className='flex  h-screen'>
            <div className=' w-1/5 bg-black text-center'>
                <a href='/admin/'>
                
                    <h1 className='  text-white border-b border-gray-500 p-2'>Admin</h1>
                </a>
                <SideBarAdmin />
            </div>
            <div className='w-4/5 bg-zinc-300'>
                <h1 className='  text-black text-center border-b border-gray-500 p-2 font-extrabold'>AutoTech</h1>
                
            </div>
        </div>
    )
}