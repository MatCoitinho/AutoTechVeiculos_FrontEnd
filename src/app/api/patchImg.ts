import api from "@/lib/api";

type cliente = {
    email: string
    imgBanner: string | undefined;
    imgPerfil: string | undefined;
}

export async function patchImg(dados:cliente) {
    console.log(dados)
    try{
        const res = await api.patch(`login/mudarImagem/`, dados)
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