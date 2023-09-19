import { axios_api } from '../lib/api'

export async function createUser(data) {
    try {
        const response = await axios_api.post(
            'http://localhost/3333', data
        );

        return response.data;
    }
    catch(err) {
        console.log(err)
    }
} 