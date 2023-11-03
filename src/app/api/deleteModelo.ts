import api from "@/lib/api"

export async function deleteModelo(id:string) {
    try{
        const res = await api.delete(`/anunciar/Modelo/${id}`)
        if(res.status.toString().startsWith('2')){
            alert('Modelo Deletado')
            return res
        }
    } catch(erro){
        alert('Falha ao deletar o modelo')
        console.log(erro)
    }
}