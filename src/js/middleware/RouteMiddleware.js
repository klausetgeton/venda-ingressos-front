import LoginStore from '../stores/LoginStore';

class RouteMiddleware {
    requireAuth(nextState, replace) {
      if ( ! LoginStore.isLoggedIn() ) {
        replace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname }
      	});
      }
    }
}

export default new RouteMiddleware();
