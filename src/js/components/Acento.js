import React from "react";


const Acento = React.createClass({

    getInitialState: function() {

        return {
            eventoId: this.props.eventoId,
            situacao: this.props.situacao,
            posicao: this.props.posicao,
            // Variavel de controle para evitar que a pessoa remova acentos que outra pessoa marcou
            euMarquei : false
        };
    },

    handleClick: function() {

        const { situacao } = this.state;
        const { euMarquei } = this.state;
        const { eventoId } = this.state;
        const { posicao } = this.state;

        var situacaoFutura = '';

        if(situacao == 'livre') {
            situacaoFutura = 'selecionado';
            this.setState({
                situacao : situacaoFutura,
                euMarquei : true
            });
        // Controle para evitar que a pessoa remova acentos que outra pessoa marcou
        } else if(situacao == 'selecionado' && euMarquei) {
            situacaoFutura = 'livre';
            this.setState({
                situacao : situacaoFutura,
                euMarquei : true
            });
        }

        // Aqui deve ser feito a questao do Socket
        socket.emit('comprou', {
            evento : eventoId,
            posicaoSelecionada : posicao,
            situacao : situacaoFutura
        });

    },

    getClass() {
        var additionalClass = "row__seat tooltip ";

        if(this.state.situacao == 'livre') {
            additionalClass += '';
        } else if(this.state.situacao == 'selecionado') {
            additionalClass += 'row__seat--selected';
        } else {
            additionalClass += 'row__seat--reserved';
        }

        return additionalClass;
    },

    render() {
        return (
            <div class={this.getClass()} onClick={this.handleClick} data-tooltip={this.state.posicao + " - " + this.state.situacao}></div>
        );
    }
});

export default Acento;
