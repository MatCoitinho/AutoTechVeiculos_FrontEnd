import Rodape from '../components/rodape'
import Cabecalho from '../components/cabecalho'
import Styles from '../styles/cadastrarUsuario.module.css'

export default function  cadastroUsuario(){

    



    return(
        <div>
                <Cabecalho />
            <div className={Styles.cadastroUsuario}>
                <h1>Cadastrar Usuário</h1>
                <div className={Styles.container}>
                        <div className={Styles.metades}>
                            <div className={Styles.form1}>
                                <p>Primeiro Nome</p>
                                <input type='name' id='primeiroNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='primeiroNome' placeholder='Digite seu primeiro nome'/>
                            </div>
                            <div className={Styles.form1}>
                                <p>Último Nome</p>
                                <input type='name' id='ultimoNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='ultimoNome' placeholder='Digite seu último nome'/>
                            </div>
                        </div>
                        <div className={Styles.metades}>
                            <div className={Styles.form1}>
                                <p>CPF</p>
                                <input type='text' id='CPFNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='CPFNome' placeholder='Digite seu CPF'/>
                            </div>
                            <div className={Styles.form1}>
                                <p>Telefone</p>
                                <input type='text' id='telefoneNome'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='telefoneNome' placeholder='Digite seu Telefone'/>
                            </div>
                        </div>
                        <div className={Styles.form}>
                                <p>E-mail</p>
                                <input type='email' id='email'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='email' placeholder='Digite seu E-mail'/>
                        </div>
                        <div className={Styles.form}>
                                <p>Endereço</p>
                                <input type='text' id='endereco'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='endereco' placeholder='Digite seu Endereço'/>
                        </div>
                        <div className={Styles.form}>
                                <p>Senha</p>
                                <input type='password' id='password'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='password' placeholder='Digite sua Senha'/>
                        </div>
                        <div className={Styles.metades}>
                            <div className={Styles.form1}>
                                <p>Username</p>
                                <input type='text' id='username'  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]*"  name='username' placeholder='Digite seu username'/>
                            </div>
                        </div>
                    
                </div>
                        <button>Cadastrar</button>
            </div>
                <Rodape />
        </div>
    )
}