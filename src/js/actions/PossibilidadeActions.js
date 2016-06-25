import dispatcher from "../dispatcher";

import * as CONSTANT from '../constants/PossibilidadeConstants';
import LoginStore from '../stores/LoginStore';

// RECEBE AS AÇÕES DO SOCKET
socket.on('alguem_comprou', (data) => {
    mudarStatusAcento(data.eventoId,
        data.posicao,
        data.situacao,
        data.usuarioId
    );
    console.log('alguem comprou', data)
});


export function mudarStatusAcento(eventoId, posicao, situacao, usuarioId, loteId, valor) {

    dispatcher.dispatch({
        type: CONSTANT.MUDAR_STATUS_ACENTO,
        eventoId,
        posicao,
        situacao,
        usuarioId,
        loteId,
        valor
    });

}

export function notificarMudancaStatusAcento(eventoId, posicao, situacao, usuarioId, loteId, valor) {
    mudarStatusAcento(eventoId, posicao, situacao, usuarioId, loteId, valor);

    // Caso o acento tenha sido selecionado a situacao deve aparecer como reservado para o outro usuario
    situacao = (situacao == CONSTANT.ACENTO_SELECINADO) ? CONSTANT.ACENTO_RESERVADO : situacao;

    socket.emit('comprou', {
        eventoId,
        posicao,
        situacao,
        usuarioId,
        loteId,
        valor
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


export function comprarAcentos(acentos) {

    var usuario = LoginStore.getUser();

    console.log('USUARIO', usuario);
    console.log('ACENTOS', acentos);

    const token = LoginStore.getJWT();
    const fetchConfig = {
                            headers: { 'Authorization': `Bearer ${token}`,
                                       'Content-Type':'application/json' },
                            method: 'POST',
                            body: JSON.stringify({
                                usuario,
                                acentos
                            })
                        };

    dispatcher.dispatch({type: CONSTANT.COMPRANDO_ACENTOS});

    fetch(CONSTANT.URL_COMPRAR_ACENTOS, fetchConfig)
    .then(response => response.json())
    .then(retorno => {
        console.log('RETORNO DA COMPRA', retorno);
        // dispatcher.dispatch({
        //     type: CONSTANT.ACENTOS_FORAM_COMPRADOS
        // });
    });
}
