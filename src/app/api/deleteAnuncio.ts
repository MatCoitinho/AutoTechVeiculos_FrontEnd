import api from "@/lib/api"

export async function deleteAnuncio(id:string) {
    try{
        const res = await api.delete(`/anunciar/Anuncio/${id}`)
        if(res.status.toString().startsWith('2')){
            alert('Anuncio Deletado')
            return res
        }
    } catch(erro){
        alert('Falha ao deletar o anuncio')
        console.log(erro)
    }
}