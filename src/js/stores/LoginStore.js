import { LOGIN_USER, LOGOUT_USER } from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';

class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this.handleActions.bind(this));
    this.user = null;
    this.jwt = null;
    this.jwtDetails = null;
  }

  // Quando alguma ação for disparada deve-se ver o que pode ser realizado
  handleActions(action) {
    switch(action.actionType) {
      case LOGIN_USER:
        this.jwt = action.jwt;
        this.user = action.user;
        this.jwtDetails = jwt_decode(this.jwt);
        this.emitChange();
        break;
      case LOGOUT_USER:
        this.user = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  getUser() {
      return this.user;
  }

  getJWT() {
      return this.jwt;
  }

  getJWTDetails() {
      return this.jwtDetails;
  }

  isLoggedIn() {
    return !! this.user;
  }
}

export default new LoginStore();
