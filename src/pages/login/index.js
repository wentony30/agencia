import React, {Component} from 'react'
import './styles.css'

export default class Login extends Component{
    render() {
        return (
            <div className="container-fluid">
                <div className="row h-100">
                    <div className="col-4 p-0">
                        <div className="login2">
                            <div className="text-center">
                                <img className="logo-login" src="img/logo_branca.svg" alt="" />
                            </div>
                            <h3>Login</h3>
                            <form action="" method="post" className="form-login">
                                <div className="md-form">
                                    <i className="fas fa-envelope prefix"></i>
                                    <input type="text" id="email" className="form-control campo-login" />
                                    <label for="email">Email</label>
                                </div>
                                <div className="md-form">
                                    <i className="fas fa-lock prefix"></i>
                                    <input type="password" id="senha" className="form-control campo-login" />
                                    <label for="senha" data-error="wrong" data-success="right">Senha</label>
                                </div>
                                <button type="submit" className="btn-login">Login</button>
                            </form>
                            <div className="controle mt-5">
                                <a href="https://www.google.com">Esqueci minha senha</a><br />
                                <span>Ainda não tem sua conta? <a href="https://www.google.com">Sign up</a></span>
                            </div>  
                            <div className="icones">
                                <p className="mt-5">Efetue seu login com suas <strong>Rede Sociais</strong>: </p>
                                <div className="icones2">
                                    <a href="#">
                                        <div className="btn-icone">
                                            <i className="fab facebook fa-facebook-f"></i>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="btn-icone">
                                            <i className="fab google fa-google"></i>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="btn-icone">
                                            <i className="fab twitter fa-twitter"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 p-0 bg-light">
                        <img className="fundo-login" src="img/fundo.svg" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}