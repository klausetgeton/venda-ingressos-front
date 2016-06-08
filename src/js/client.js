import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Login from "./pages/Login";






const app = document.getElementById('app');

ReactDOM.render(
	<Router>
		<Route path="/" component={Layout}>
			<IndexRoute component={Todos}></IndexRoute>
			<Route path="favorites" component={Favorites}></Route>
			<Route path="login" component={Login}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>, app
);
