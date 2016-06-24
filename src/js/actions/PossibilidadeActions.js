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

}

export function notificarMudancaStatusAcento(eventoId, posicao, situacao, usuarioId) {
    mudarStatusAcento(eventoId, posicao, situacao, usuarioId);

    // Caso o acento tenha sido selecionado a situacao deve aparecer como reservado para o outro usuario
    situacao = (situacao == CONSTANT.ACENTO_SELECINADO) ? CONSTANT.ACENTO_RESERVADO : situacao;

    socket.emit('comprou', {
        eventoId,
        posicao,
        situacao,
        usuarioId
    });
}

export function fetchPossibilidades(eventoId) {

    dispatcher.dispatch({type: CONSTANT.FETCH_POSSIBILIDADES});

    fetch(CONSTANT.URL_FETCH_POSSIBILIDADES + eventoId)
    .then(response => response.json())
    .then(evento => {
        dispatcher.dispatch({
            type: CONSTANT.RECEIVE_POSSIBILIDADES,
            evento
        });
    });
}


// RECEBE AS AÇÕES DO SOCKET
socket.on('alguem_comprou', (data) => {
    mudarStatusAcento(data.eventoId,
        data.posicao,
        data.situacao,
        data.usuarioId
    );
    console.log('alguem comprou', data)
});
