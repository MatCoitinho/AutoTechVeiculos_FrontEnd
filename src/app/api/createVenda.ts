import api from '../../lib/api'

type venda = {
    cpf:  String;
    nome: String;
    placa: String;
    valor: Number;
    contato: String;
}


export async function createVenda(data: venda) {
    const res = await api.post('vender/criarVenda/', data)

    if (res.status.toString().startsWith('2')) {
        alert('Venda criada com sucesso')
        return res.data;
    }
    alert('erro')
}