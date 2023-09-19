import { formToJSON } from 'axios';
import api from '../lib/api'

export async function createUser(data) {
    alert(JSON.stringify(data))
    const res = await api.post('login', formToJSON(data))
    if (res.status.toString().startsWith('2')) {
        return res.data;
    }
    alert('erro')
} 