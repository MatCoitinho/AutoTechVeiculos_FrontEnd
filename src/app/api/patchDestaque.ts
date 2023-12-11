import api from "@/lib/api";

type Destaque = {
    id: Number,
    valor: Number
}

export async function patchDestaque(dados:Destaque) {
    try{
        const res = await api.patch(`/anunciar/destaquePago/`, dados)
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