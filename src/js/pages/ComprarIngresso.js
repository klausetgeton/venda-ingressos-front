import React from "react";

export default class extends React.Component {


	render() {

		const { params } = this.props;
		const { eventoId } = params;

		console.log(window.socket);

		return (
			<div>
				<h1>Comprar de ingressos</h1>
			</div>
		);
	}
}
