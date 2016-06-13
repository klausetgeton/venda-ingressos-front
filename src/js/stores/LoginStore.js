import { LOGIN_USER, LOGOUT_USER } from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';

class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = null;
    this._jwt = null;
  }

  _registerToActions(action) {
      console.log('acao recebida', action);
    switch(action.actionType) {
      case LOGIN_USER:
        this._jwt = action.jwt;
        this._userDetails = action.userDetails;
        this._user = jwt_decode(this._jwt);
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._user = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get user() {
    return this._user;
  }

  get jwt() {
    return this._jwt;
  }

  get userDetails(){
      return this._userDetails;
  }

  isLoggedIn() {
    return !! this._user;
  }
}

export default new LoginStore();
