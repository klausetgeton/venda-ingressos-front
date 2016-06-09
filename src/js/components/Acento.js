import React from "react";


const Acento = React.createClass({

    getInitialState: function() {
        return {
            situacao: this.props.situacao,
            posicao: this.props.posicao,
            // Variavel de controle para evitar que a pessoa remova acentos que outra pessoa marcou
            euMarquei : false
        };
    },

    handleClick: function() {

        var { situacao } = this.state;
        var { euMarquei } = this.state;

        if(situacao == 'livre') {
            this.setState({
                situacao : 'selecionado',
                euMarquei : true
            });
        // Controle para evitar que a pessoa remova acentos que outra pessoa marcou
        } else if(situacao == 'selecionado' && euMarquei) {
            this.setState({
                situacao : 'livre',
                euMarquei : true
            });
        }

        // Aqui deve ser feito a questao do Socket
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
            <div class={this.getClass()} onClick={this.handleClick} data-tooltip={this.state.posicao + this.state.situacao}></div>
        );
    }
});

export default Acento;





// export default class extends React.Component {
//
//
//
//
//     getClass() {
//
//         var additionalClass = "row__seat tooltip ";
//
//         if(this.state.situacao == 'livre') {
//             additionalClass += '';
//         } else if(this.state.situacao == 'selecionado') {
//             additionalClass += 'row__seat--selected';
//         } else {
//             additionalClass += 'row__seat--reserved';
//         }
//
//         return additionalClass;
//     }
//
//     render() {
//
//         return (
//             <div class={this.getClass()} data-tooltip={this.props.posicao + this.state.situacao}></div>
//         );
//     }
// }
