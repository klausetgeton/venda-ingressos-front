import React from "react";
import Acento from "./Acento";

export default class extends React.Component {

    render() {

        const { params } = this.props;
        const { eventoId } = this.props;
        const { user } = this.props;
        const { modalidade } = this.props;

        const Acentos = this.props.acentos.map((acento, index) => {
            // o {...acento} deve vir primeiro, para que se o state modalidade for definido o mesmo nao seja sobrescrito
            return <Acento
                       {...acento}
                       key={index}
                       eventoId={eventoId}
                       user={user}
                       modalidade={modalidade} />
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
