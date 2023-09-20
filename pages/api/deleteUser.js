import api from '../lib/api'

export async function deleteUser(data){
    try {
        const res = await api.delete(`login/User/${data}/`)
        if (res.status.toString().startsWith('2')) {
            return res;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}