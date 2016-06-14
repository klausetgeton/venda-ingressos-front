import { browserHistory } from 'react-router';


import AppDispatcher from '../dispatcher.js';
import { LOGIN_USER, LOGOUT_USER } from '../constants/LoginConstants.js';

class LoginActions {
    loginUser(jwt, user, redirectTo) {
        const previousJwt = localStorage.getItem('jwt');

        // Dispara a ação de que o usuário logou, para que todos possam ter a change de fazer algo com os dados recebidos
        AppDispatcher.dispatch({
            actionType: LOGIN_USER,
            jwt: jwt,
            user : user
        });

        // Armazena os dados do usuário autenticado
        if (previousJwt !== jwt) {
            localStorage.setItem('jwt', jwt);
            localStorage.setItem('user', JSON.stringify(user));
        }

        browserHistory.push( redirectTo );
    }

    logoutUser(redirectTo) {
        // Redireciona para outro componente
        browserHistory.push(redirectTo ? redirectTo : '/');

        // Remove os dados do usuário
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');

        // Dispara a ação de que o usuário deslogou, para que todos possam ter a change de fazer algo com os dados recebidos
        AppDispatcher.dispatch({
            actionType: LOGOUT_USER
        });
    }

    attemptToLoginPreviousUser(redirectTo) {

        const previousJwt = localStorage.getItem('jwt');
        const previousUser = localStorage.getItem('user');

        if( previousJwt && previousUser ){
            this.loginUser(previousJwt, JSON.parse(previousUser), redirectTo ? redirectTo : '/' );
        }
    }
    // temporario
    // gotQuote: (quote) => {
    //     AppDispatcher.dispatch({
    //         actionType: QUOTE_GET,
    //         quote: quote
    //     });
    // },
}

export default new LoginActions();
