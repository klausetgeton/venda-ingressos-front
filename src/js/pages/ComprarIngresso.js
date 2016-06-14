import React from "react";

export default class extends React.Component {


	render() {

		const { params } = this.props;
		const { eventoId } = params;

		return (
			<div>
				<h1>Comprar de ingressos</h1>
			</div>
		);
	}
}
