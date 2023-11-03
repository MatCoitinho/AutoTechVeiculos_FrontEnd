import api from "@/lib/api"

export async function deleteReserva(id:string) {
    try{
        const res = await api.delete(`/reservar/Reserva/${id}`)
        if(res.status.toString().startsWith('2')){
            alert('Reserva Deletada')
            return res
        }
    } catch(erro){
        alert('Falha ao deletar a reserva')
        console.log(erro)
    }
}