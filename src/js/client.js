// Componentes
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';
// Evita a o hash ?k_3i4j2o e o /#/
//<Router history={createBrowserHistory()} >

// import createHashHistory from 'history/lib/createHashHistory';
// Evita o hash apenas
// const history = createHashHistory({ queryKey: false })
import { browserHistory } from 'react-router';

import LoginActions from './actions/LoginActions';
import RouteMiddleware from './middleware/RouteMiddleware';


// Paginas
import Layout from "./pages/Layout";
import ListagemEventos from "./pages/ListagemEventos";
import ComprarIngresso from "./pages/ComprarIngresso";
import VisualizarPossibilidades from "./pages/VisualizarPossibilidades";
import MeusIngressos from "./pages/MeusIngressos";
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

// Ja tenta realizar o login do usuário que estava logado, nao tem controle quando o token vai expirar
LoginActions.attemptToLoginPreviousUser();

// Onde a aplicação será rendenizada
const app = document.getElementById('app');

// Rendeniza o Router como principal
ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={Layout}>
			<IndexRoute component={ListagemEventos}></IndexRoute>
			<Route path="cadastro" component={Cadastro}></Route>
			<Route path="login" component={Login}></Route>
			<Route path="visualizar-possibilidades/:eventoId" component={VisualizarPossibilidades} onEnter={RouteMiddleware.requireAuth}></Route>
			<Route path="comprar-ingresso/:eventoId" component={ComprarIngresso} onEnter={RouteMiddleware.requireAuth}></Route>
			<Route path="meus-ingressos" component={MeusIngressos} onEnter={RouteMiddleware.requireAuth}></Route>
		</Route>
	</Router>, app
);
