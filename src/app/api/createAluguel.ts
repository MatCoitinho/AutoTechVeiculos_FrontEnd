import api from '../../lib/api'

type reserva = {
    inicio: string;
    hora: string;
    fim: string;
    email:  string;
    id: string;
}

export async function criarAluguel(data: reserva) {
   try{
       const res = await api.post('/alugar/criarAluguel/', data)
    
        if (res.status === 200) {
            console.log('aluguel criada')
            return res.data;
        }
   }catch(error){
       console.log(error)
   }
}