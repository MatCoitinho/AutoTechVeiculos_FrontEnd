import api from "@/lib/api";

type veiculos = {
    placa: string;
    quilometragem: string;
    cor: string;
    status: boolean;
    ano: number;
    modelo: string;
    dono: string;
}

export async function patchVeiculo(id: string,dados:veiculos) {
    try{
        const res = await api.patch('url', dados)
        if(res.status === 200){
            console.log('tudo ok')
            return res.status
        } else {
            console.log('algo deu errado')
        }
    }catch(error){
        console.log('ALGO DEU ERRADO')
        
    }
}