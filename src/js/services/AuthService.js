import request from 'reqwest';
import when from 'when';
import { LOGIN_URL, SIGNUP_URL } from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';
import LoginStore from '../stores/LoginStore.js';

class AuthService {

    constructor(){
        this.redirectTo = '/';
    }

    afterLoginRedirectTo(redirectTo){
        this.redirectTo = redirectTo;
        return this;
    }

    getRedirect() {
        return this.redirectTo;
    }

    attempt(email, password) {
        return this.handleAuth(when(request({
            url: LOGIN_URL,
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            data: {
                email, password
            }
        })));
    }

    logout() {
        LoginActions.logoutUser();
    }

    // temporario
    nextQuote() {
        request({
            url: QUOTE_URL,
            method: 'GET',
            crossOrigin: true,
            headers: {
                'Authorization': 'Bearer ' + LoginStore.jwt
            }
        })
        .then(function(response) {
            // QuoteActions.gotQuote(response);
        });
    }

    // getUserDetails = function(token, callBack) {
    //     const HeaderConfig = { headers: { 'Authorization': `Bearer ${token}` }};
    //
    //     fetch('http://ingressos.dev/api/user', HeaderConfig)
    //     .then(response => response.json()
    //     .then(data => data.user ))
    //     .then(usuario => callBack(usuario));
    // }

    signup(name, email, password) {
        return this.handleAuth(when(request({
            url: SIGNUP_URL,
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            data: {
                name,
                email,
                password
            }
        })));
    }

    handleAuth(loginPromise) {

        var redirectTo = this.getRedirect();

        return loginPromise.then(function(response) {
            var jwt = response.id_token;
            var user = response.user;

            LoginActions.loginUser(jwt, user, redirectTo);

            return true;
        });
    }
}

export default new AuthService();
