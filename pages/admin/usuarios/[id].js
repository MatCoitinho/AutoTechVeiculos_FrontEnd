import { useRouter } from "next/router"
import Rodape from "../../../components/rodape"
import Cabecalho from "../../../components/cabecalho"
import { useState } from "react"
import Styles from '../../../styles/editarUsuario.module.css'
import { patchCliente } from "../../api/patchClient"
import { patchUser } from "../../api/patchUser"




let valores
export function buscaDadosPatch(dados){

    valores = dados

}




export default function user(){
    
    
    const router = useRouter() 
    const { query } = router 

    const userId = query?.id
    
   


    
    const [entrada, setEntrada] = useState({
        primeiroNome:valores[0],
        ultimoNome:valores[1],
        CPF:valores[4],
        telefone:valores[5],
        email:valores[7],
        endereco:valores[6],
        username:valores[2]
    })

    const getEntradas = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntrada(prevState => ({...prevState, [nome]:valor}))
    }

    

    const handleClick = async() =>{
        const userEntrada = {
            first_name:entrada.primeiroNome,
            last_name:entrada.ultimoNome,
            username: entrada.username,
            email: entrada.email,
            senha:entrada.senha,
        }
        const clienteEntrada = {
            cpf:entrada.CPF,
            telefone: entrada.telefone,
            endereco:entrada.endereco
        }

        const aux = await patchCliente(userId,clienteEntrada)
        
        const aux1 = await patchUser(userId,userEntrada)
               
    }



    



    return(
            <div className={Styles.container}>
            <Cabecalho />
        <div className={Styles.editarUsuario}>
            <h1>Editar Usuário</h1>
            <div className={Styles.container}>
                    <div className={Styles.metades}>
                        <div className={Styles.form1}>
                            <p>Primeiro Nome</p>
                            <input type='name' id='primeiroNome'  value={entrada.primeiroNome} pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='primeiroNome' placeholder='Digite seu primeiro nome' onChange={getEntradas}/>
                        </div>
                        <div className={Styles.form1}>
                            <p>Último Nome</p>
                            <input type='name' id='ultimoNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*" value={entrada.ultimoNome}  name='ultimoNome' placeholder='Digite seu último nome' onChange={getEntradas}/>
                        </div>
                    </div>
                    <div className={Styles.metades}>
                        <div className={Styles.form1}>
                            <p>CPF</p>
                            <input type='text' id='CPFNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*" value={entrada.CPF}  name='CPF' placeholder='Digite seu CPF' onChange={getEntradas}/>
                        </div>
                        <div className={Styles.form1}>
                            <p>Telefone</p>
                            <input type='text' id='telefoneNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*" value={entrada.telefone} name='telefone' placeholder='Digite seu Telefone' onChange={getEntradas}/>
                        </div>
                    </div>
                    <div className={Styles.form}>
                            <p>E-mail</p>
                            <input type='email' id='email'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  value={entrada.email} name='email' placeholder='Digite seu E-mail' onChange={getEntradas}/>
                    </div>
                    <div className={Styles.form}>
                            <p>Endereço</p>
                            <input type='text' id='endereco'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  value={entrada.endereco} name='endereco' placeholder='Digite seu Endereço' onChange={getEntradas}/>
                    </div>
                    
                    <div className={Styles.metades}>
                        <div className={Styles.form1}>
                            <p>Username</p>
                            <input type='text' id='username'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  value={entrada.username} name='username' placeholder='Digite seu username' onChange={getEntradas}/>
                        </div>
                    </div>
            </div>
                <button onClick={handleClick}>Editar</button>
        </div>
            <Rodape />
    </div>
    )
}