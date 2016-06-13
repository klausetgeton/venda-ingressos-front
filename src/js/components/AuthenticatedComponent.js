import React from 'react';
import LoginStore from '../stores/LoginStore';

export default (ComposedComponent) => {
  return class AuthenticatedComponent extends React.Component {

    constructor() {
      super()
      this.state = this.getLoginState();
    }

    getLoginState() {
      return {
        userLoggedIn: LoginStore.isLoggedIn(),
        user: LoginStore.getUser(),
        jwt: LoginStore.getJWT()
      };
    }

    // Quando o usuário logar ou deslogar, deve-se mudar o estado do componente e alterar seu render
    onChangeLoginStatus() {
        this.setState(this.getLoginState());
    }

    // Quando o componente for montando o mesmo deve iniciar a escuta pelo login do usuario
    componentDidMount() {
      this.changeLoginListener = this.onChangeLoginStatus.bind(this);
      LoginStore.addChangeListener(this.changeLoginListener);
    }

    // Quando o componente for removido ou remontado o mesmo deve remover a escuta pelo login do usuario
    componentWillUnmount() {
      LoginStore.removeChangeListener(this.changeLoginListener);
    }

    render() {
      return (
          <ComposedComponent
            {...this.props}
            user={this.state.user}
            jwt={this.state.jwt}
            userLoggedIn={this.state.userLoggedIn} />
      );
    }
  }
};
