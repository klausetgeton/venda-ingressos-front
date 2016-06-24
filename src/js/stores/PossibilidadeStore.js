import { EventEmitter } from "events";
import * as CONSTANT from '../constants/PossibilidadeConstants';
import dispatcher from "../dispatcher";


class PossibilidadeStore extends EventEmitter {

	constructor() {
		super()
		this.evento = null;
	}

	mudarStatusAcento(eventoId, posicao, situacao, usuarioId) {

		var evento = this.getPossibilidadesEvento();

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

	getPossibilidadesEvento() {
		return this.evento;
	}

	handleActions(action) {

		switch(action.type) {
			case CONSTANT.MUDAR_STATUS_ACENTO: {
				this.mudarStatusAcento(action.eventoId, action.posicao, action.situacao, action.usuarioId);
				break;
			}
			case CONSTANT.RECEIVE_POSSIBILIDADES: {
				this.evento = action.evento;
				this.emit("change");
				break;
			}
		}
	}

}

const possibilidadeStore = new PossibilidadeStore;
dispatcher.register(possibilidadeStore.handleActions.bind(possibilidadeStore));

export default possibilidadeStore;
