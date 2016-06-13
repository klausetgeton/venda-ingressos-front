import React from 'react';
import Auth from '../services/AuthService';

export default class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      extra: ''
    };
  }

  signup(e) {
    e.preventDefault();
    Auth.signup(this.state.user, this.state.password, this.state.extra)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  render() {
    return (
      <div className="login jumbotron center-block">
        <h1>Signup</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" value={this.state.user} className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={this.state.password} className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="extra">Extra</label>
          <input type="text" value={this.state.extra} className="form-control" id="password" ref="password" placeholder="Some extra information" />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}
