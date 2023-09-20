import api from '../lib/api'

export async function patchVeiculo(data,data2){
    try {
        const res = await api.patch(`anunciar/Veiculo/${data}/`,data2)
        if (res.status.toString().startsWith('2')) {
            alert('Veiculo alterado com sucesso')
            return res;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}