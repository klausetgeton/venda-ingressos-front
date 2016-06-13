import React from "react";
import Acento from "./Acento";

export default class extends React.Component {

    render() {

        const { params } = this.props;
        const { eventoId } = this.props;

        const Acentos = this.props.acentos.map((acento, index) => {
            return <Acento key={index}
                           eventoId={eventoId}
                           {...acento} />
        });

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
