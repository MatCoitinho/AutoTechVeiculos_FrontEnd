import api from "@/lib/api";

type anuncio = {
    placa: string;
    preco: number;
    destaque: boolean;
    servico: boolean;
    descricao: string;
    img1:string;
    img2:string;
    pontos:number;
}

export async function patchAnuncio(id: string, dados:anuncio) {
    try{
        const res = await api.patch(`/anunciar/Anuncio/${id}/`, dados)
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