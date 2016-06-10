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

// Paginas
import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ListagemEventos from "./pages/ListagemEventos";
import ComprarIngresso from "./pages/ComprarIngresso";
import VisualizarPossibilidades from "./pages/VisualizarPossibilidades";

// Onde a aplicação será rendenizada
const app = document.getElementById('app');

// Rendeniza o Router como principal
ReactDOM.render(
	<Router history={createBrowserHistory()} >
		<Route path="/" component={Layout}>
			<IndexRoute component={ListagemEventos}></IndexRoute>
			<Route path="login" component={Login}></Route>
			<Route path="cadastro" component={Cadastro}></Route>
			<Route path="visualizar-possibilidades/:eventoId" component={VisualizarPossibilidades}></Route>
			<Route path="comprar-ingresso/:eventoId" component={ComprarIngresso}></Route>


			<Route path="todos" component={Todos}></Route>
			<Route path="settings" component={Settings}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>, app
);
