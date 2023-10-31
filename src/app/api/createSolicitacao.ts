import api from "@/lib/api";


type requisicao = {
    marca: string;
    modelo: string;
    ano: string;
    quilometragem: string;
    cambio: string;
    servico: string;
    solicitante: string;
    combustivel: string;
    situacao: boolean; 
}


export async function criarSolicitacao(dado:requisicao) {
    try{
        const res = await api.post('/solicitar/criarSolicitacao/', dado)
        if(res.status === 200){
            console.log('enviado')
        }
    }catch(error){
        console.error(error)
    }
}