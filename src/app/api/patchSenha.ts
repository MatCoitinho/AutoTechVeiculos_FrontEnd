import api from "@/lib/api";

type veiculos = {
    senha_atual: string;
    nova_senha: string;
    email: string;
}

export async function patchSenha(email: string,dados:veiculos) {
    try{
        const res = await api.patch(`login/mudarSenha/`, dados)
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