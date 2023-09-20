import InformacoesClientes from "./informacoesClientes";
import BarraDePesquisa from "./barraDePesquisa";
import Style from '../styles/renderizaInformacoesClientes.module.css'
import { useState, useEffect } from "react";





let objUser = []

export function buscaDados(dados){
    objUser = dados;

}

export default function renderizaInformacoesClientes(){
   
    
    const renderCliente = objUser.map((cliente, index)=>( 
        <InformacoesClientes key={index} value={cliente} />
    ));
   

    const [clientes, setClientes] = useState(renderCliente)

    useEffect(() => {
      setClientes(renderCliente)
    }, [renderCliente]) 
    


    return(
        <div className={Style.container}>
            <BarraDePesquisa />
            <div className={Style.renderizaInformacoesClientes}>
            {clientes}
            </div>
        </div>

    );
}