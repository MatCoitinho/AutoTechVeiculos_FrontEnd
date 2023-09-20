import api from '../lib/api'

export async function getVeiculo(data){
    try{
        const res = await api.get(`anunciar/Veiculo/${data}/`)
        if (res.status.toString().startsWith('2')) {
            return res;
        }
    } catch (error) {
        console.error(error);
    }
}
