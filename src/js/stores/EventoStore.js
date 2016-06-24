import { EventEmitter } from "events";
import * as CONSTANT from '../constants/EventoConstants';
import dispatcher from "../dispatcher";


class EventoStore extends EventEmitter {

	constructor() {
		super()
		this.eventos = null;
	}

	atualizarEventos(eventos) {
		this.eventos = eventos;
	}

	getEventos(){
		return this.eventos;
	}

	handleActions(action) {

	    console.log('ACTION WAS FIRED ==>', action);

		switch(action.type) {
			case CONSTANT.RECEIVE_EVENTOS: {
				this.atualizarEventos(action.eventos);
				this.emit("change");
				break;
			}
		}
	}

}

const eventoStore = new EventoStore;
dispatcher.register(eventoStore.handleActions.bind(eventoStore));

export default eventoStore;
