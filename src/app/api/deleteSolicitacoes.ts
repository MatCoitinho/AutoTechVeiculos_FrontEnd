import api from "@/lib/api";


export async function deleteSolicitacao(id: string) {
    try{
        const res = await api.delete(`/solicitar/Solicitacao/${id}/`)
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