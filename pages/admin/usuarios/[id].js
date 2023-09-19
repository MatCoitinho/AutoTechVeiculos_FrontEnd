import { useRouter } from "next/router"
import Rodape from "../../../components/rodape"
import Cabecalho from "../../../components/cabecalho"
import Styles from '../../../styles/editarUsuario.module.css'
import { useState } from "react"

export default function user(){
    
    
    const router = useRouter() 
    const { query } = router 

    const userId = query?.id
    
   const editar = (valor) => {
    console.log(valor)
   }


    
    const [entrada, setEntrada] = useState({
        primeiroNome:'asd',
        ultimoNome:'asd',
        CPF:'asd',
        telefone:'asd',
        email:'asd',
        endereco:'asd',
        senha:'asd',
        username:'asd'
    })

    const getEntradas = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntrada(prevState => ({...prevState, [nome]:valor}))
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
                <button onClick={() => editar(entrada)}>Editar</button>
        </div>
            <Rodape />
    </div>
    )
}