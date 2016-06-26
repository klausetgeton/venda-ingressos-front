import dispatcher from "../dispatcher";

import * as CONSTANT from '../constants/IngressoVendidoConstants';
import LoginStore from '../stores/LoginStore';

export function fetchIngressosVendidos() {

    const token = LoginStore.getJWT();
    const fetchConfig = { headers: { 'Authorization': `Bearer ${token}`} };

    dispatcher.dispatch({type: CONSTANT.FETCH_INGRESSOS_VENDIDOS});

    fetch(CONSTANT.URL_FETCH_INGRESSOS_VENDIDOS, fetchConfig)
    .then(response => response.json())
    .then(ingressosVendidos => {
        dispatcher.dispatch({
            type: CONSTANT.RECEIVE_INGRESSOS_VENDIDOS,
            ingressosVendidos
        });
    });
}
