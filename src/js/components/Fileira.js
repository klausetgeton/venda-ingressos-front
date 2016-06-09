import React from "react";
import Acento from "./Acento";

export default class extends React.Component {

    render() {

        const Acentos = this.props.acentos.map((acento, index) => <Acento key={index} posicao={acento.posicao} situacao={acento.situacao} /> );

        return (
            <div>
                {this.props.descricao}
                <div class="row-acento">
                    {Acentos}
                </div>
            </div>
        );
    }
}
