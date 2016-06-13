import { browserHistory } from 'react-router';

import AppDispatcher from '../dispatcher.js';
import { LOGIN_USER, LOGOUT_USER } from '../constants/LoginConstants.js';

export default {
    // temporario
    gotQuote: (quote) => {
        AppDispatcher.dispatch({
            actionType: QUOTE_GET,
            quote: quote
        });
    },
  loginUser: (jwt, usuario) => {
    var savedJwt = localStorage.getItem('jwt');

    console.log('dispatch', {
      actionType: LOGIN_USER,
      jwt: jwt,
      userDetails : usuario
  });



    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt,
      userDetails : usuario
    });

    if (savedJwt !== jwt) {

        console.log('jwt salvo', savedJwt,'novo token',  jwt);

        browserHistory.push('/home');

        // localStorage.setItem('jwt', jwt);
    }
  },
  logoutUser: () => {
    browserHistory.push('/');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
