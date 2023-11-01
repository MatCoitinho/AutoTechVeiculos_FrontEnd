import api from "@/lib/api";

type anuncio = {
    pontos:number;
}

export async function patchPontos(id: string, dados:anuncio) {
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