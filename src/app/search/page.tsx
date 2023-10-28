'use client'
import { Header } from '../../components/ui/header'
import Footer from '../../components/ui/footer'
import { WhatsButton } from '../../components/ui/whatsapp'
import { Card } from "../../components/ui/card"
import { veiculos } from "../../lib/data"

export default function Search({
  searchParams,
  }: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className='max-w-7xl w-full flex flex-col py-12 px-4 mt-36'>
        <h1 className='text-2xl text-bold mb-4'>Resultados da busca</h1>
        <div className='grid grid-cols-3 gap-16'>
          { veiculos.filter((el) => {
            return (
              (searchParams.marca === 'undefined' || el.title === searchParams.marca) &&
              (searchParams.modelo === 'undefined' || el.title === searchParams.modelo) &&
              (searchParams.ano === 'undefined' || el.year.toString() === searchParams.ano) &&
              (searchParams.preco === 'undefined' || el.price.toString() === searchParams.preco) &&
              (searchParams.cambio === 'undefined' || el.cambio === searchParams.cambio) &&
              (searchParams.situacao === 'undefined' || el.status === searchParams.situacao)
            );
          }).map(car => (
            <Card
              key={car.id}
              id={car.id}
              image={car.image}
              title={car.title}
              status={car.status}
              cambio={car.cambio}
              year={car.year.toString()}
              price={car.price.toString()}
              textbutton='Reserve já'
            />
          )) }
        </div>
      </div>
      <WhatsButton />
      <Footer />
    </main>
  )
}
