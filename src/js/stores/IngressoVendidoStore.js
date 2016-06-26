import { EventEmitter } from "events";
import * as CONSTANT from '../constants/IngressoVendidoConstants';
import dispatcher from "../dispatcher";


class IngressoVendidoStore extends EventEmitter {

	constructor() {
		super()
		this.ingressosVendidos = null;
	}

	getIngressos() {
		return this.ingressosVendidos;
	}

	handleActions(action) {
		switch(action.type) {
			case CONSTANT.RECEIVE_INGRESSOS_VENDIDOS: {
				this.ingressosVendidos = action.ingressosVendidos;
				this.emit("change");
				break;
			}
		}
	}

}

const ingressoVendidoStore = new IngressoVendidoStore;
dispatcher.register(ingressoVendidoStore.handleActions.bind(ingressoVendidoStore));

export default ingressoVendidoStore;
