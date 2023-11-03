import api from '../../lib/api'

type veiculos = {
    placa: string;
    quilometragem: string;
    cor: string;
    status: boolean;
    ano: number;
    modelo: string;
    dono: string;
}


export async function createVehicle(data: veiculos) {
    const res = await api.post('/anunciar/criarVeiculo/', data)

    if (res.status.toString().startsWith('2')) {
        alert('Veiculo criado com sucesso')
        return res.data;
    }
    alert('erro')
}