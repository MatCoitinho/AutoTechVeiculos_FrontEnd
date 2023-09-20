import api from '../lib/api'

export async function getUser(data){
        const res = await api.get(`login/User/${data}`)
        if (res.status.toString().startsWith('2')) {
            return res;
        }
    
    alert('erro')
} 