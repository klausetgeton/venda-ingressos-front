import React from 'react';

export default class OpcaoModalidade extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: props.valor,
      descricao: props.descricao,
      loteId: props.loteId,
    };
  }

  handleClick(){
      this.props.mudarModalidade(this.state.loteId + ':' + this.state.valor);
  }

  render() {
    return (
        <a onClick={this.handleClick.bind(this)} class="waves-effect waves-light btn">{this.state.descricao}(R$ {this.state.valor})</a>
    );
  }
}
