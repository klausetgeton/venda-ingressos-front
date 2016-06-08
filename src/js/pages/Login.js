import React from "react";

export default class Settings extends React.Component {
	render() {
		return (
			<div>
				<div class="row">
					 <form class="col s12">
						 <div class="row">
							 <div class="input-field col s12">
								 <input placeholder="Nome" id="name" type="text" class="validate" />
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
								 <label for="password">Password</label>
							 </div>
						 </div>
					 </form>
					</div>
			</div>
		);
	}
}
