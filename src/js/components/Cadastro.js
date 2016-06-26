import React from 'react';
import Auth from '../services/AuthService';

export default class Cadastro extends React.Component {

  constructor() {
    super();
    this.state = {
        name: '',
        email: '',
        password: ''
    };
  }

  cadastrar(e) {
    e.preventDefault();

    console.log(this.state);

    const nextDestiny = '/';

    Auth.afterLoginRedirectTo(nextDestiny).signup(this.state.name, this.state.email, this.state.password)
      .catch(function(err) {
        alert("Falha ao logar!");
        console.log("Falha ao logar:", err);
      });
  }

  handleChangeName(e){
      const name = e.target.value;

      this.setState({ name });
  }


  handleChangeEmail(e){
      const email = e.target.value;

      this.setState({ email });
  }

  handleChangePassword(e){
      const password = e.target.value;

      this.setState({ password });
  }

  render() {
    return (
        <div className="login jumbotron center-block">
            <h1>Cadastro</h1>
            <form role="form">
                <div className="form-group">
                    <label htmlFor="name">Name4444</label>
                    <input type="text" value={this.state.name} onChange={this.handleChangeName.bind(this)} className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={this.state.password}  onChange={this.handleChangePassword.bind(this)} className="form-control" id="password" ref="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.cadastrar.bind(this)}>Submit</button>
            </form>
        </div>
    );
  }
}

// ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
