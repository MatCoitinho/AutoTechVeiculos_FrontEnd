import Rodape from '../components/rodape'
import Cabecalho from '../components/cabecalho'
import Styles from '../styles/cadastrarUsuario.module.css'
import { useState } from 'react'

export default function  cadastroUsuario(){

    const [entrada, setEntrada] = useState({
        primeiroNome:'',
        ultimoNome:'',
        CPF:'',
        telefone:'',
        email:'',
        endereco:'',
        senha:'',
        username:''
    })

    const getEntradas = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        setEntrada(prevState => ({...prevState, [nome]:valor}))
    }

    const sendEntrada = () =>{
        //montar conexão com o banco aqui
        console.log(entrada)
    }

    return(
        <div>
                <Cabecalho />
            <div className={Styles.cadastroUsuario}>
                <h1>Cadastrar Usuário</h1>
                <div className={Styles.container}>
                        <div className={Styles.metades}>
                            <div className={Styles.form1}>
                                <p>Primeiro Nome</p>
                                <input type='name' id='primeiroNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='primeiroNome' placeholder='Digite seu primeiro nome' onChange={getEntradas}/>
                            </div>
                            <div className={Styles.form1}>
                                <p>Último Nome</p>
                                <input type='name' id='ultimoNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='ultimoNome' placeholder='Digite seu último nome' onChange={getEntradas}/>
                            </div>
                        </div>
                        <div className={Styles.metades}>
                            <div className={Styles.form1}>
                                <p>CPF</p>
                                <input type='text' id='CPFNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='CPF' placeholder='Digite seu CPF' onChange={getEntradas}/>
                            </div>
                            <div className={Styles.form1}>
                                <p>Telefone</p>
                                <input type='text' id='telefoneNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='telefone' placeholder='Digite seu Telefone' onChange={getEntradas}/>
                            </div>
                        </div>
                        <div className={Styles.form}>
                                <p>E-mail</p>
                                <input type='email' id='email'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='email' placeholder='Digite seu E-mail' onChange={getEntradas}/>
                        </div>
                        <div className={Styles.form}>
                                <p>Endereço</p>
                                <input type='text' id='endereco'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='endereco' placeholder='Digite seu Endereço' onChange={getEntradas}/>
                        </div>
                        <div className={Styles.form}>
                                <p>Senha</p>
                                <input type='password' id='password'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='senha' placeholder='Digite sua Senha' onChange={getEntradas}/>
                        </div>
                        <div className={Styles.metades}>
                            <div className={Styles.form1}>
                                <p>Username</p>
                                <input type='text' id='username'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='username' placeholder='Digite seu username' onChange={getEntradas}/>
                            </div>
                        </div>
                    
                </div>
                        <button onClick={sendEntrada}>Cadastrar</button>
            </div>
                <Rodape />
        </div>
    )
}