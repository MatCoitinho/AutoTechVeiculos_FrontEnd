
import { Grid3 } from "../components/ui/grid3";
import { veiculos } from "../lib/data";
import { Header } from '../components/ui/header'
import Footer from '../components/ui/footer'
import { WhatsButton } from '../components/ui/whatsapp'

export default function Home() {
  


  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className='bg-hero w-full h-96 mt-24 bg-cover flex items-center justify-center'>
        <div className='max-w-7xl w-full flex items-center justify-center flex-col'>
          <h1 className="font-bold text-red-700 tracking-[0.3em] text-3xl">AUTOTECH</h1>
          <div className="w-24 h-1 bg-red-700 my-12"/>
          <h4 className="animate-typing overflow-hidden whitespace-nowrap font-semibold text-white tracking-[0.3em] text-xl text-center px-4">Coloque uma frase massa aqui</h4>
        </div>
      </div>

      <div className='max-w-7xl w-full flex flex-col py-12 px-4'>
        <h1 className='text-2xl text-bold mb-4'>Populares</h1>
        <Grid3 data={veiculos} textButton="Reserve"/>
      </div>

      <div className='max-w-7xl w-full flex flex-col py-12 px-4'>
        <h1 className='text-2xl text-bold mb-4'>Destaque venda</h1>
        <Grid3 data={veiculos} textButton="Reserve já"/>
      </div>

      <div className='max-w-7xl w-full flex flex-col py-12 px-4'>
        <h1 className='text-2xl text-bold mb-4'>Destaque aluguel</h1>
        <Grid3 data={veiculos} textButton="Alugue já"/>
      </div>
      <WhatsButton />
      <Footer />
    </main>
  )
}
