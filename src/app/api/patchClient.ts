import api from "@/lib/api";

type cliente = {
    cpf: string;
    telefone: string;
    endereco: string;
    email: string; 
    first_name: string;
}

export async function patchClient(id: string,dados:cliente) {
    try{
        const res = await api.patch('url', dados)
        if(res.status === 200){
            console.log('tudo ok')
            return res.status
        } else {
            console.log('algo deu errado')
        }
    }catch(error){
        console.log('ALGO DEU ERRADO')
     
    }
}