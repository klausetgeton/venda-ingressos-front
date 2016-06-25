import React from "react";
import * as PossibilidadeActions from '../actions/PossibilidadeActions';
import * as CONSTANT from '../constants/PossibilidadeConstants';


const Acento = React.createClass({

    handleClick: function() {

        const usuarioId = this.props.user.id;
        const { usuarioDonoId } = this.props;
        const { situacao } = this.props;
        // const { euMarquei } = this.state;
        const { eventoId } = this.props;
        const { posicao } = this.props;
        const { modalidade } = this.props;
        const { disponivel } = this.props;

        if( ! disponivel)
        {
            return alert('Este acento já foi comprado!');
        }

        if( ! modalidade) {
            return alert('Defina a modalidade!');
        }

        // console.log('usuarioId', usuarioId , 'usuarioDonoId', usuarioDonoId);

        // Caso o acento tenha dono e o dono não for outra pessoa
        if(usuarioDonoId != null && usuarioId != usuarioDonoId) {
            return false;
        }

        var situacaoFutura = false;

        if(situacao == CONSTANT.ACENTO_LIVRE) {
            situacaoFutura = CONSTANT.ACENTO_SELECINADO;
        // Controle para evitar que a pessoa remova acentos que outra pessoa marcou
        // } else if(situacao == 'selecionado' && euMarquei) {
        } else if(situacao == CONSTANT.ACENTO_SELECINADO || situacao == CONSTANT.ACENTO_RESERVADO && disponivel ) {
            situacaoFutura = CONSTANT.ACENTO_LIVRE;
        }

        // Implementar o controle do usuario que pode ou nao desmarcar os acentos com base no usuario que comprou ou selecionou
        // Caso nao exista mudança ou o usuário nao possa alterar nao deve-se disparar a ação;
        if( situacaoFutura ) {

            var modalidadeLote = modalidade.split(':');
            var loteId = modalidadeLote[0];
            var valor = modalidadeLote[1];
            PossibilidadeActions.notificarMudancaStatusAcento(eventoId, posicao, situacaoFutura, usuarioId, loteId, valor);
        }
    },

    render() {

        const usuarioId = this.props.user.id;
        const { usuarioDonoId } = this.props;
        const { situacao } = this.props;
        // const { euMarquei } = this.state;
        const { eventoId } = this.props;
        const { posicao } = this.props;

        var additionalClass = "row__seat tooltip ";

        if(this.props.situacao == 'livre') {
            additionalClass += '';
        // } else if(this.props.situacao == 'selecionado' || ) {
        } else if(usuarioId == usuarioDonoId) {
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
