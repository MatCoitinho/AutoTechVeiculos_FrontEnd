import api from "@/lib/api";

type modelos = {
    tipoCombustivel:string;
    model: string;
    marca: string;
    ano: number;
    cambio: boolean;
    categoria: string;
    qtdPortas: number;
}

export async function patchModelo(id: string,dados:modelos) {
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