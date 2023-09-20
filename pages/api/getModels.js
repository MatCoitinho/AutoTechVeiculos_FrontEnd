import api from '../lib/api'

export async function getModel(data){
    
        const res = await api.get(`anunciar/Modelo/${data}`)
        if (res.status.toString().startsWith('2')) {
            return res;
        }
     
    alert('erro')
}