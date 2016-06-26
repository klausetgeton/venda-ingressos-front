import React from 'react';
import Auth from '../services/AuthService';

export default class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
        nome: '',
        email: '',
        senha: ''
    };
  }

  cadastrar(e) {

      console.log(e);
    e.preventDefault();



    // const nextDestiny = '/';
    //
    // Auth.afterLoginRedirectTo(nextDestiny).signup(this.state.nome, this.state.email, this.state.senha)
    //   .catch(function(err) {
    //     alert("Falha ao logar!");
    //     console.log("Falha ao logar:", err);
    //   });
  }

  handleChangeNome(e){
      const nome = e.target.value;

      this.setState({ nome });
  }

  handleChangeEmail(e){
      const email = e.target.value;

      this.setState({ email });
  }

  handleChangeSenha(e){
      const senha = e.target.value;

      this.setState({ senha });
  }

    render() {
        return (
        <div className="login jumbotron center-block">
            <h1>Cadastro</h1>
            <form role="form">
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" value={this.state.nome} onChange={this.handleChangeNome.bind(this)} className="form-control" id="nome" placeholder="Nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} className="form-control" id="username" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input type="senha" value={this.state.senha} onChange={this.handleChangeSenha.bind(this)} className="form-control" id="senha" ref="senha" placeholder="Senha" />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.cadastrar.bind(this)}>Cadastrar</button>
            </form>
        </div>
        );
    }
}
