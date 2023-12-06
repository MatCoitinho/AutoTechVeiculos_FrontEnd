import { ScrollArea } from "./scroll-area";
import Image from "next/image";

type wishCard = {
  brand: string;
  model: string;
  year: number;
  color: string;
};

const fakeWishCard = {
  brand: "Fiat",
  model: "Uno",
  year: 2010,
  color: "Cinza",
} as wishCard;

// ajustar para com tipagem do backend
type car = {
  plate: string;
  quilometers: number;
  status: string;
  model: string;
  owner: string; //user?
  color: string;
};

// ajustar para com tipagem do backend
type carAdd = {
  points: number;
  img1: string;
  img2: string;
  description: string;
  vechicle: car;
  emphasized: boolean;
  price: number;
  service: string;
};

const fakeCar = {
  plate: "ABC-1234",
  quilometers: 10000,
  status: "Usado",
  model: "Gol",
  owner: "João",
  color: "Preto",
} as car;

const fakeCarAdd = {
  points: 10,
  img1: "/carro.jpeg",
  img2: "/carro.jpeg",
  description: "Carro em ótimo estado",
  vechicle: fakeCar,
  emphasized: true,
  price: 10000,
  service: "Venda",
} as carAdd;

const Card = ({ carAdd }: { carAdd: carAdd }) => {
  return (
    <div className="border flex flex-col border-b-[1px] gap-2 p-3 w-full items-center border-gray-500 rounded-md">
      <div className="flex flex-col">
        <div className="">
          <Image
            src={carAdd.img1}
            alt="carro"
            width={150}
            height={150}
            className="rounded-md bg-cover w-full"
          />
        </div>
        <div className="flex gap-2">
          <p className="text-gray-500 m-0 text-md">{carAdd.vechicle.model}</p>
          <p className="text-gray-500 m-0 text-md">{carAdd.vechicle.color}</p>
          <p className="text-gray-500 m-0 text-md">{carAdd.vechicle.plate}</p>
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
          {Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} carAdd={fakeCarAdd} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MyWishList;
