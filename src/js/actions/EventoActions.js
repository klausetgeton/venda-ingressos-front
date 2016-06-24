import dispatcher from "../dispatcher";

import * as CONSTANT from '../constants/EventoConstants';


export function fetchEventos() {

    dispatcher.dispatch({type: CONSTANT.FETCH_EVENTOS});

    fetch(CONSTANT.URL_FETCH_EVENTOS)
    .then(response => response.json())
    .then(eventos => {
        dispatcher.dispatch({
            type: CONSTANT.RECEIVE_EVENTOS,
            eventos
        });
    });
}
