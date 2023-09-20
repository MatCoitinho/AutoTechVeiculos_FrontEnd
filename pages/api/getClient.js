import api from '../lib/api'
import { getUser } from './getUser';

export async function getClient(data){
        const res = await api.get(`login/Cliente/${data}`)
        if (res.status.toString().startsWith('2')) {
            const aux = res.data.user
            const res2 = await getUser(aux)
            if (res2.status.toString().startsWith('2')) {
                return ({ret1:res,ret2:res2});
            }
        }
    alert('erro')
}