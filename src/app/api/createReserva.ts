import api from '../../lib/api'

type aluguel = {
    id: string;
    email: string;
}


export async function criarReserva(data: aluguel) {
   
   try{
       const res = await api.post('/reservar/criarReserva/', data)
    
       if (res.status === 200) {
           console.log('reserva criada')
           return res.data;
       }

   } catch(error){
       console.log(error)
   }
   
}