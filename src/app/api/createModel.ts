import api from '../../lib/api'

type modelo = {
    tipoCombustivel:string;
    model: string;
    marca: string;
    ano: number;
    cambio: boolean;
    categoria: string;
    qtdPortas: number;
}


export async function createModel(data: modelo) {
    const res = await api.post('/anunciar/Modelo/', data)

    if (res.status.toString().startsWith('2')) {
        alert('Modelo criado com sucesso')
        return res.data;
    }
    alert('erro')
}