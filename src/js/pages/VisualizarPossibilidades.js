import React from "react";
import Fileira from "../components/Fileira";

export default class extends React.Component {



	render() {

		const { params } = this.props;
		const { eventoId } = params;

		console.log(window.socket);


		var possibilidades = {
		    fileiras : [
		        {
		            descricao : "Primeira",
		            acentos : [
		                {
		                    posicao : "A1",
		                    situacao : "reservado"
		                },
		                {
		                    posicao : "A2",
		                    situacao : "reservado"
		                },
		                {
		                    posicao : "A3",
		                    situacao : "selecionado"
		                },
		                {
		                    posicao : "A4",
		                    situacao : "livre"
		                }
		            ]
		        },
		        {
		            descricao : "Segunda",
		            acentos : [
		                {
		                    posicao : "B1",
		                    situacao : "livre"
		                },
		                {
		                    posicao : "B2",
		                    situacao : "livre"
		                },
		                {
		                    posicao : "B3",
		                    situacao : "livre"
		                },
		                {
		                    posicao : "B4",
		                    situacao : "selecionado"
		                }
		            ]
		        }
		    ]
		};

		const Fileiras = possibilidades.fileiras.map((fileira, index) => <Fileira key={index} descricao={fileira.descricao} acentos={fileira.acentos} />);

		return (
			<div>
				<div>
					<h1 class="plan__title">Selecione os acentos</h1>

      			    {/* Possibilidades. */}
					<div class="rows rows--mini">
						{Fileiras}
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
