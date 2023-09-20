import api from '../lib/api'

export async function deleteVeiculo(data){
    try {
        const res = await api.delete(`anunciar/Veiculo/${data}/`)
        if (res.status.toString().startsWith('2')) {
            return res;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}