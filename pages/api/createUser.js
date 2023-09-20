import { formToJSON } from 'axios';
import api from '../lib/api'

export async function createUser(data) {
    const res = await api.post('login/cadastrar/', data)

    if (res.status.toString().startsWith('2')) {
        alert('Usuario cadastrado com sucesso')
        return res.data;
    }
    alert('erro')
} 