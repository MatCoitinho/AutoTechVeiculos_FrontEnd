//Anuncios

import Image from "next/image";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import EmphaseAddDialog from "./emphaseAddDialog";
import { useEffect, useState } from "react";
import { getFavoritos } from "@/app/api/getWishList";

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





type Venda = {
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
let vehicle:Venda[];

const  getdados = async () => {
        const response = await getFavoritos('');
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
        <Image
            src={carAdd.img1}
            alt="carro"
            width={150}
            height={150}
            className="rounded-md bg-cover w-full"
          />
        </div>
        <div className="flex gap-2">
          <p className="text-gray-500 m-0 text-md">{carAdd.modelo}</p>
          <p className="text-gray-500 m-0 text-md">{carAdd.marca }</p>
          <p className="text-gray-500 m-0 text-md">{carAdd.ano}</p>
        </div>
      </div>

      <EmphaseAddDialog id={carAdd.id} />
    </div>
  );
};

const MyAddsList = () => {
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

export default MyAddsList;
