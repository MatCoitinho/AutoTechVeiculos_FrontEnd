import api from '../lib/api'

export async function patchModel(data,data2){
    try {
        const res = await api.patch(`anunciar/Modelo/${data}`,data2)
        if (res.status.toString().startsWith('2')) {
            return res;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}