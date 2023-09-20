import api from '../lib/api'

export async function patchCliente(data,data2){
    try {
        const res = await api.patch(`login/Cliente/${data}`,data2)
        if (res.status.toString().startsWith('2')) {
            return res;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}