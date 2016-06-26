import React from "react";

export default class extends React.Component {

    render() {

        const { data_compra } = this.props;
        const { possibilidade_compra } = this.props;

        return (
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Data: {data_compra}, posição {possibilidade_compra.nome}</span>
                </div>
            </div>
        );
    }
}
