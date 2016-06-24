"use strict";

const SocketAction = class SocketAction {

    setNovoStatusPossibilidade(possibilidades, dadosCompra) {

        const eventoId = dadosCompra.eventoId;
        const posicao = dadosCompra.posicao;
        const situacao = dadosCompra.situacao;
        const usuarioId = dadosCompra.usuarioId;

		var evento = this.findEventoById(possibilidades, eventoId);

		const fileirasLength = evento.fileiras.length;

		var encontrou = false;

		for (var i = 0; i < fileirasLength; i++) {

			var fileira = evento.fileiras[i];
			var acentosLength = evento.fileiras[i].acentos.length;

			for (var j = 0; j < acentosLength; j++) {
				var acento = evento.fileiras[i].acentos[j];

				// Atualizar o acento correto
				if( acento.posicao == posicao) {

					acento.situacao = situacao;

					// Liberar o acento para outro usuario utilizar
					if(acento.situacao == 'livre'){
						acento.usuarioDonoId = null;
					} else if(acento.situacao == 'selecionado' || acento.situacao == 'reservado' ) {
						acento.usuarioDonoId = usuarioId;
					}

					encontrou = true;
					break;
				}
			}

			if(encontrou) {
				break;
			}
		}
	}

	findEventoById(possibilidades, eventoId) {

		var eventoEncontrado = null;

		var eventoLength = possibilidades.length;

		for (var i = 0; i < eventoLength; i++) {
			if(possibilidades[i].eventoId == eventoId) {
			 	eventoEncontrado = possibilidades[i];
				break;
			}
		}

		return eventoEncontrado;
	}



}


module.exports = new SocketAction();
