import { EventEmitter } from "events";
import * as CONSTANT from '../constants/PossibilidadeConstants';
import dispatcher from "../dispatcher";


class PossibilidadeStore extends EventEmitter {

	constructor() {
		super()
		this.eventos = null;
	}

	mudarStatusAcento(eventoId, posicao, situacao, usuarioId) {

		var evento = this.getAllFrom(eventoId);

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
					if(acento.situacao == CONSTANT.ACENTO_LIVRE){
						acento.usuarioDonoId = null;
					} else if(acento.situacao == CONSTANT.ACENTO_SELECINADO || acento.situacao == CONSTANT.ACENTO_RESERVADO) {
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

		this.emit("change");
	}

	getAllFrom(eventoId) {

		var eventoEncontrado = null;

		if(this.eventos) {
			var eventoLength = this.eventos.length;

			for (var i = 0; i < eventoLength; i++) {
				if(this.eventos[i].eventoId == eventoId) {
				 	eventoEncontrado = this.eventos[i];
					break;
				}
			}
		}

		return eventoEncontrado;
	}

	handleActions(action) {

		switch(action.type) {
			case CONSTANT.MUDAR_STATUS_ACENTO: {
				this.mudarStatusAcento(action.eventoId, action.posicao, action.situacao, action.usuarioId);
				break;
			}
			case CONSTANT.RECEIVE_POSSIBILIDADES: {
				this.eventos = action.eventos;
				this.emit("change");
				break;
			}
		}
	}

}

const possibilidadeStore = new PossibilidadeStore;
dispatcher.register(possibilidadeStore.handleActions.bind(possibilidadeStore));

export default possibilidadeStore;
