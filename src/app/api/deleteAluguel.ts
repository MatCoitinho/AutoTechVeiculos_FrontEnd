import api from "@/lib/api"

export async function deletealuguel(id:string) {
    try{
        const res = await api.delete(`/alugar/Alugar/${id}`)
        if(res.status.toString().startsWith('2')){
            alert('aluguel Deletado')
            return res
        }
    } catch(erro){
        alert('Falha ao deletar o aluguel')
        console.log(erro)
    }
}