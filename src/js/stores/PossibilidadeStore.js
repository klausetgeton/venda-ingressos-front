import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class PossibilidadeStore extends EventEmitter {

	constructor() {
		super()
		this.eventos = null;
	}

	// createTodo(text) {
	// 	const id = Date.now();
	//
	// 	this.eventos.push({
	// 		id,
	// 		text,
	// 		complete: false,
	// 	});
	//
	// 	this.emit("change");
	// }

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
					if(acento.situacao == 'livre'){
						acento.usuarioDonoId = null;
					} else if(acento.situacao == 'selecionado') {
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

	    console.log('PossibilidadeStore:action was fired ==>', action);

		switch(action.type) {
			case "MUDAR_STATUS_ACENTO": {
				this.mudarStatusAcento(action.eventoId, action.posicao, action.situacao, action.usuarioId);
				break;
			}
			case "RECEIVE_EVENTOS": {
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
