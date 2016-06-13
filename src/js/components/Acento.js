import React from "react";
import * as PossibilidadeActions from '../actions/PossibilidadeActions';

const Acento = React.createClass({

    handleClick: function() {

        const { situacao } = this.props;
        // const { euMarquei } = this.state;
        const { eventoId } = this.props;
        const { posicao } = this.props;

        var situacaoFutura = '';

        if(situacao == 'livre') {
            situacaoFutura = 'selecionado';
        // Controle para evitar que a pessoa remova acentos que outra pessoa marcou
        // } else if(situacao == 'selecionado' && euMarquei) {
        } else if(situacao == 'selecionado') {
            situacaoFutura = 'livre';
        }

        // Implementar o controle do usuario que pode ou nao desmarcar os acentos com base no usuario que comprou ou selecionou

        PossibilidadeActions.mudarStatusAcento(eventoId, posicao, situacaoFutura);
    },

    render() {

        var additionalClass = "row__seat tooltip ";

        if(this.props.situacao == 'livre') {
            additionalClass += '';
        } else if(this.props.situacao == 'selecionado') {
            additionalClass += 'row__seat--selected';
        } else {
            additionalClass += 'row__seat--reserved';
        }

        return (
            <div class={additionalClass} onClick={this.handleClick} data-tooltip={this.props.posicao + " - " + this.props.situacao}></div>
        );
    }
});

export default Acento;
