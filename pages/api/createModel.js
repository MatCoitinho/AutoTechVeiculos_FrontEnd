import api from '../lib/api'

export async function createModel(data) {
    const res = await api.post('anunciar/Modelo/', data)

    if (res.status.toString().startsWith('2')) {
        alert('Modelo criado com sucesso')
        return res.data;
    }
    alert('erro')
}