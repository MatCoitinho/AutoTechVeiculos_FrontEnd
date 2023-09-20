import api from '../lib/api'

export async function createVehicle(data) {
    const res = await api.post('anunciar/Veiculo/', data)

    if (res.status.toString().startsWith('2')) {
        return res.data;
    }
    alert('erro')
}