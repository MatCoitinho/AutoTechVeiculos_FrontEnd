import api from "@/lib/api";

type cliente = {
    telefone: string | undefined;
    endereco: string | undefined;
    email: string | undefined;
    first_name: string | undefined;
}

export async function patchClient(id: string,dados:cliente) {
    try{
        const res = await api.patch(`login/atualizar/?cpf=${id}`, dados)
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