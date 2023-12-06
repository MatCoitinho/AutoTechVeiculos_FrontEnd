import api from "@/lib/api"

export async function deleteClient(id:string) {
    try{
        const res = await api.delete(`/login/Cliente/${id}`)
        if(res.status.toString().startsWith('2')){
            alert('cliente Deletado')
            return res
        }
    } catch(erro){
        alert('Falha ao deletar o cliente')
        console.log(erro)
    }
}