import { getFavoritos } from "@/app/api/getWishList";
import { ScrollArea } from "./scroll-area";
import Image from "next/image";
import { getListaDeDesejos } from "@/app/api/getListaDeDesejos";




// ajustar para com tipagem do backend

type Favorito =  {
  id: Number,
  modelo: String,
  marca: String,
  ano: String,
}
// ajustar para com tipagem do backend
type carAdd = {
  id: Number,
  modelo: String,
  marca: String,
  ano: String,
};



let vehicle:Favorito[];

const  getdados = async () => {
  let email = localStorage.getItem('@autotech:user')
  let vaule = email?.replace(/["/]/g, '');
  console.log(vaule)
        const response = await getListaDeDesejos(String(vaule));
        console.log('Busca')
        if (response?.data) {
            vehicle = response.data; // atribui o array retornado à variável vehicle
        }
    }

getdados();



const Card = ({ carAdd }: { carAdd: carAdd }) => {
  return (
    <div className="border flex flex-col border-b-[1px] gap-2 p-3 w-full items-center border-gray-500 rounded-md">
      <div className="flex flex-col">
        <div className="">
        </div>
        <div className="flex gap-2">
          <p className="text-gray-500 m-0 text-md">{carAdd.marca}</p>
          <p className="text-gray-500 m-0 text-md">{carAdd.modelo}</p>
          <p className="text-gray-500 m-0 text-md">{carAdd.ano}</p>
        </div>
      </div>
    </div>
  );
};

const MyWishList = () => {
  return (
    <div className="h-full">
      <ScrollArea className="max-h-96 flex flex-col scroll-area pr-2">
        <div className="gap-3 flex flex-col w-full">
          {vehicle?.map((carro, index) => (
            <Card key={index} carAdd={carro} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MyWishList;
