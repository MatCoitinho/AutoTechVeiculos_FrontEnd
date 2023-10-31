import api from '../../lib/api'

type reserva = {
    id: string;
    email: string;
}

export async function criarAluguel(data: reserva) {
   try{
       const res = await api.post('/anunciar/criarAnuncio/', data)
    
        if (res.status === 200) {
            console.log('aluguel criada')
            return res.data;
        }
   }catch(error){
       console.log(error)
   }
}