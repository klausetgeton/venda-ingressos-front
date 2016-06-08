// Componentes
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// Paginas
import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Eventos from "./pages/Eventos";

// Onde a aplicação será rendenizada
const app = document.getElementById('app');

// Rendeniza o Router como principal
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Todos}></IndexRoute>
			<Route path="login" component={Login}></Route>
			<Route path="eventos" component={Eventos}></Route>
			<Route path="cadastro" component={Cadastro}></Route>

			<Route path="settings" component={Settings}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>, app
);
