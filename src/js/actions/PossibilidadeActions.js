import dispatcher from "../dispatcher";

export function mudarStatusAcento(eventoId, posicao, situacao, usuarioId) {

    dispatcher.dispatch({
        type: "MUDAR_STATUS_ACENTO",
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

    dispatcher.dispatch({type: "FETCH_EVENTOS"});

    fetch('http://localhost:8080/api/possibilidades')
    .then(response => response.json()
    .then(eventos => {
        dispatcher.dispatch({
            type: "RECEIVE_EVENTOS",
            eventos
        });
    }));
}
