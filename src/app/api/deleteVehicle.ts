import api from "@/lib/api"

export async function deleteVehicle(id:string) {
    try{
        const res = await api.delete(`/anunciar/Veiculo/${id}`)
        if(res.status.toString().startsWith('2')){
            alert('Model Deletado')
            return res
        }
    } catch(erro){
        alert('Falha ao deletar o modelo')
        console.log(erro)
    }
}