import dispatcher from "../dispatcher";

import * as CONSTANT from '../constants/PossibilidadeConstants';

export function mudarStatusAcento(eventoId, posicao, situacao, usuarioId) {

    dispatcher.dispatch({
        type: CONSTANT.MUDAR_STATUS_ACENTO,
        eventoId,
        posicao,
        situacao,
        usuarioId
    });

    // Aqui deve ser feito a questao do Socket
    socket.emit('comprou', {
        eventoId,
        posicao,
        situacao,
        usuarioId
    });
}

export function fetchPossibilidades() {

    dispatcher.dispatch({type: CONSTANT.FETCH_POSSIBILIDADES});

    fetch(CONSTANT.URL_FETCH_POSSIBILIDADES)
    .then(response => response.json()
    .then(eventos => {
        dispatcher.dispatch({
            type: CONSTANT.RECEIVE_POSSIBILIDADES,
            eventos
        });
    }));
}
