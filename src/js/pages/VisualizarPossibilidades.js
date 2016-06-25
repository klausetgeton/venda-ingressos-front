import React from "react";
import AuthenticatedComponent from '../components/AuthenticatedComponent';
import Fileira from "../components/Fileira";
import PossibilidadeStore from '../stores/PossibilidadeStore';
import * as PossibilidadeActions from '../actions/PossibilidadeActions';


import OpcaoModalidade from "../components/OpcaoModalidade";

export default AuthenticatedComponent(class VisualizarPossibilidades extends React.Component {

	constructor(props) {
		super(props);
		this.onReceivePossibilidades = this.onReceivePossibilidades.bind(this);
		this.state = {
			possibilidades : PossibilidadeStore.getPossibilidadesEvento(),
			modalidade : null
		};
	}

	componentWillMount() {
      PossibilidadeStore.on("change", this.onReceivePossibilidades);

	  console.log('solicitando download de ', this.props.params.eventoId);

	  PossibilidadeActions.fetchPossibilidades(this.props.params.eventoId);
    }

	componentWillUnmount() {
	  PossibilidadeStore.removeListener("change", this.onReceivePossibilidades);
	}

	onReceivePossibilidades() {
		this.setState({
			possibilidades : PossibilidadeStore.getPossibilidadesEvento()
		});
	}

	handleBuy() {

		var acentosSelecionados = PossibilidadeStore.getAcentosDoUsuario(this.user.id);

		if( ! acentosSelecionados.length > 0 ) {
			return alert('Selecione pelo menos um acento!');
		}

		PossibilidadeActions.comprarAcentos(acentosSelecionados);
	}

	definirModalidade(modalidade){
		this.setState({modalidade});
	}

	render() {

		const { params } = this.props;
		const { eventoId } = params;

		var Fileiras = null;
		var InformacoesDoLocal = null;
		var Lotes = null;

		if(this.state.possibilidades) {
			Fileiras = this.state.possibilidades.fileiras.map((fileira, index) => {
				return <Fileira key={index}
								eventoId={eventoId}
								descricao={fileira.descricao}
								acentos={fileira.acentos}
								user={this.props.user}
								modalidade={this.state.modalidade} />
			});

			InformacoesDoLocal = (<div class="centralizar">
								      Local: {this.state.possibilidades.local.nome}, {this.state.possibilidades.local.descricao}
								  </div>
								);

			Lotes = this.state.possibilidades.lotes.map((lote, index) => {
				return (
					<div key={index}>
						<OpcaoModalidade
							key={ (new Date().getTime())}
							mudarModalidade={this.definirModalidade.bind(this)}
							descricao="Masculino"
							loteId={lote.id}
							valor={lote.valor_masculino} />
						<OpcaoModalidade
							key={ (new Date().getTime() +1) }
							mudarModalidade={this.definirModalidade.bind(this)}
							descricao="Feminino"
							loteId={lote.id}
							valor={lote.valor_feminino} />
					</div>
				);
			});


		}

		// COMENTÁRIO DENTRO DO RENDER
		// {/* Fim - Possibilidades. */}


		return (
			<div>
				<div>
					<h1 class="plan__title">Selecione os acentos</h1>

					{ InformacoesDoLocal }

					<div class="centralizar">
						{ Lotes }
					</div>

					<div class="rows rows--mini">
						{Fileiras ? Fileiras: 'Carregando...'}
					</div>

					<ul class="legend">
						<li class="legend__item legend__item--free">Disponível</li>
						<li class="legend__item legend__item--reserved">Reservado</li>
						<li class="legend__item legend__item--selected">Selecionado</li>
					</ul>
					<button class="action action--buy" onClick={this.handleBuy.bind(this.props)}>Comprar ingressos</button>
				</div>
			</div>
		);
	}
});
