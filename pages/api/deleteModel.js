import api from '../lib/api'

export async function DeleteModel(data){
    try {
        const res = await api.delete(`anunciar/Modelo/${data}`)
        if (res.status.toString().startsWith('2')) {
            alert('Modelo deletado com sucesso')
            return res;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}