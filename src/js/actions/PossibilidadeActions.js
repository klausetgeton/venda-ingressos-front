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
    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //   console.log("got the data!", data);
    // })

    dispatcher.dispatch({type: "FETCH_EVENTOS"});

    setTimeout(() => {
            dispatcher.dispatch({type: "RECEIVE_EVENTOS",
                                eventos: [
                                			{
                                				eventoId : 1,
                                				fileiras : [
                                			        {
                                			            descricao : "Primeira",
                                			            acentos : [
                                			                {
                                			                    posicao : "A1",
                                			                    situacao : "reservado"
                                			                },
                                			                {
                                			                    posicao : "A2",
                                			                    situacao : "reservado"
                                			                },
                                			                {
                                			                    posicao : "A3",
                                			                    situacao : "livre"
                                			                },
                                			                {
                                			                    posicao : "A4",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A5",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A6",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A7",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A8",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A9",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A10",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A11",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A12",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A13",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A14",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A15",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A16",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A17",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "A18",
                                			                    situacao : "livre"
                                			                }
                                			            ]
                                			        },
                                					{
                                			            descricao : "Segunda",
                                			            acentos : [
                                			                {
                                			                    posicao : "B1",
                                			                    situacao : "reservado"
                                			                },
                                			                {
                                			                    posicao : "B2",
                                			                    situacao : "reservado"
                                			                },
                                			                {
                                			                    posicao : "B3",
                                			                    situacao : "livre"
                                			                },
                                			                {
                                			                    posicao : "B4",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B5",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B6",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B7",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B8",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B9",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B10",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B11",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B12",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B13",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B14",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B15",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B16",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B17",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "B18",
                                			                    situacao : "livre"
                                			                }
                                			            ]
                                			        },
                                					{
                                			            descricao : "Terceira",
                                			            acentos : [
                                			                {
                                			                    posicao : "C1",
                                			                    situacao : "reservado"
                                			                },
                                			                {
                                			                    posicao : "C2",
                                			                    situacao : "reservado"
                                			                },
                                			                {
                                			                    posicao : "C3",
                                			                    situacao : "livre"
                                			                },
                                			                {
                                			                    posicao : "C4",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "C5",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "C6",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "C7",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "C8",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "C9",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "C10",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "C11",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "C12",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "C13",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "C14",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "C15",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "C16",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "C17",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "C18",
                                			                    situacao : "reservado"
                                			                }
                                			            ]
                                			        },
                                					{
                                			            descricao : "Quarta",
                                			            acentos : [
                                			                {
                                			                    posicao : "D1",
                                			                    situacao : "reservado"
                                			                },
                                			                {
                                			                    posicao : "D2",
                                			                    situacao : "reservado"
                                			                },
                                			                {
                                			                    posicao : "D3",
                                			                    situacao : "livre"
                                			                },
                                			                {
                                			                    posicao : "D4",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "D5",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D6",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "D7",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D8",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D9",
                                			                    situacao : "reservado"
                                			                },
                                							{
                                			                    posicao : "D10",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D11",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D12",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D13",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D14",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D15",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D16",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D17",
                                			                    situacao : "livre"
                                			                },
                                							{
                                			                    posicao : "D18",
                                			                    situacao : "livre"
                                			                }
                                			            ]
                                			        }
                                			    ]
                                			}
                                		]
                                    });
        }, 1000);
}
