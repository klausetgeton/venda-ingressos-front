import React from "react";
import Fileira from "../components/Fileira";
import PossibilidadeStore from '../stores/PossibilidadeStore';

export default class extends React.Component {

	constructor(props) {
		super(props);
		this.onReceivePossibilidades = this.onReceivePossibilidades.bind(this);
		this.state = {
			possibilidades : PossibilidadeStore.getAllFrom(this.props.params.eventoId)
		};
	}

	componentWillMount() {
      PossibilidadeStore.on("change", this.onReceivePossibilidades);
    }

	componentWillUnmount() {
	  PossibilidadeStore.removeListener("change", this.onReceivePossibilidades);
	}

	onReceivePossibilidades() {
		console.log('Recevento Possibilidades:',  PossibilidadeStore.getAllFrom(this.props.params.eventoId));
		this.setState({
			possibilidades : PossibilidadeStore.getAllFrom(this.props.params.eventoId)
		});
	}

	render() {

		const { params } = this.props;
		const { eventoId } = params;

		console.log(window.socket);

		var Fileiras = null;

		if(this.state.possibilidades) {
			Fileiras = this.state.possibilidades.fileiras.map((fileira, index) => {
				return <Fileira key={index}
				eventoId={eventoId}
				descricao={fileira.descricao}
				acentos={fileira.acentos} />
			});
		}

		return (
			<div>
				<div>
					<h1 class="plan__title">Selecione os acentos</h1>

      			    {/* Possibilidades. */}
					<div class="rows rows--mini">
						{Fileiras ? Fileiras: 'Carregando...'}
					</div>
					{/* Fim - Possibilidades. */}

					<ul class="legend">
						<li class="legend__item legend__item--free">Disponível</li>
						<li class="legend__item legend__item--reserved">Reservado</li>
						<li class="legend__item legend__item--selected">Selecionado</li>
					</ul>
					<button class="action action--buy">Comprar ingressos</button>
				</div>
			</div>
		);
	}
}
