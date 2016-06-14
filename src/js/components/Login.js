import React from 'react';
// import React from 'react/addons';
// import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();

    const nextDestiny = this.props.location.state.nextPathname;

    Auth.afterLoginRedirectTo(nextDestiny).attempt(this.state.user, this.state.password)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  handleChangePassword(e){
      const password = e.target.value;

      this.setState({ password });
  }

  handleChangeUsername(e){
      const user = e.target.value;

      this.setState({ user });
  }

  render() {
    return (
        <div className="login jumbotron center-block">
            <h1>Login</h1>
            <form role="form">
                <div className="form-group">
                    <label htmlFor="email">Username</label>
                    <input type="text" value={this.state.user} onChange={this.handleChangeUsername.bind(this)} className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={this.state.password}  onChange={this.handleChangePassword.bind(this)} className="form-control" id="password" ref="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
            </form>
        </div>
    );
  }
}

// ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
