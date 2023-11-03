import api from "@/lib/api";

const situacao = {
    situacao: true
}

export async function patchSolicitacao(id: string) {
    try{
        const res = await api.patch(`/solicitar/Solicitacao/${id}/`, situacao)
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