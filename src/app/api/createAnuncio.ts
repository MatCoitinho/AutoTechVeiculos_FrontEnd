import api from '../../lib/api'

type anuncio = {
    placa: string;
    preco: number;
    destaque: boolean;
    servico: boolean;
    descricao: string;
    img1:string;
    img2:string;
    pontos:number;
}


export async function createAnoucement(data: anuncio) {
    const res = await api.post('/anunciar/criarAnuncio/', data)

    if (res.status.toString().startsWith('2')) {
        alert('Anuncio criado com sucesso')
        return res.data;
    }
    alert('erro')
}