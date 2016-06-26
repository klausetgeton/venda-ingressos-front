"use strict";

const EventoPossibilidades = class EventoPossibilidades {

    constructor() {
        this.eventoPossibilidades = {};
    }

    getPossibilidadesEvento(eventoId) {
        return this.eventoPossibilidades[eventoId];
    }

    salvarPossibilidades(eventoId, possibilidades){
        this.eventoPossibilidades[eventoId] = possibilidades;
    }

    definirAcentosComprados(eventoId, acentosComprados)
    {
        acentosComprados.forEach((acentoComprado) => {
            var acento = this.procurarAcentoEvento(eventoId, acentoComprado.posicao);
            acento.disponivel = false;
        });
    }

    procurarAcentoEvento(eventoId, posicaoAcento) {
        var evento = this.getPossibilidadesEvento(eventoId);

        const fileirasLength = evento.fileiras.length;

        var encontrou = false;
        var acentoProcurado = null;

        for (var i = 0; i < fileirasLength; i++) {

            var fileira = evento.fileiras[i];
            var acentosLength = evento.fileiras[i].acentos.length;

            for (var j = 0; j < acentosLength; j++) {
                var acento = evento.fileiras[i].acentos[j];

                // Atualizar o acento correto
                if( acento.posicao == posicaoAcento) {
                    acentoProcurado = acento;
                    encontrou = true;
                    break;
                }
            }

            if(encontrou) {
                break;
            }
        }

        return acentoProcurado;
    }


    setNovoStatusPossibilidade(dadosCompra) {

        const eventoId = dadosCompra.eventoId;
        const posicao = dadosCompra.posicao;
        const situacao = dadosCompra.situacao;
        const usuarioId = dadosCompra.usuarioId;
        const loteId = dadosCompra.loteId;
        const valor = dadosCompra.valor;

        var acento = this.procurarAcentoEvento(eventoId, posicao);

        acento.situacao = situacao;
		// Liberar o acento para outro usuario utilizar
		if(acento.situacao == 'livre'){
			acento.usuarioDonoId = null;
            acento.loteId = null;
            acento.valor = null;
            acento.modalidade = null;
		} else if(acento.situacao == 'selecionado' || acento.situacao == 'reservado' ) {
			acento.usuarioDonoId = usuarioId;
            acento.loteId = loteId;
            acento.valor = valor;
            acento.modalidade = acento.loteId + ':' + acento.valor;
		}
	}

}


module.exports = new EventoPossibilidades();
