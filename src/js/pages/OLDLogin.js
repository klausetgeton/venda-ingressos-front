import React from "react";

export default class Login extends React.Component {

	constructor() {
			super()
			this.state = {
				nome: "Klaus Etgeton",
			};
	}


	mudarNome(e){
		const nome = e.target.value;
		this.setState({nome});
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<div class="row">
					 <form class="col s12">
						 <div class="row">
							 <div class="input-field col s12">
								 <input id="name" type="text" class="validate" />
								 <label for="name">Nome</label>
							 </div>
 						 </div>
						 <div class="row">
							 <div class="input-field col s12">
								 <input id="email" type="email" class="validate" />
								 <label for="email">Email</label>
							 </div>
						 </div>
						 <div class="row">
							 <div class="input-field col s12">
								 <input id="password" type="password" class="validate" />
								 <label for="password">Senha</label>
							 </div>
						 </div>
						 <div class="row">
						  	<div class="input-field col s12">
									 <button class="btn waves-effect waves-light" name="action">Logar
								   		<i class="material-icons right">send</i>
								   </button>
								</div>
						 </div>
					 </form>
					</div>
			</div>
		);
	}
}
