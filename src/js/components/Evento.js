import React from "react";
import { Link } from "react-router";

export default class extends React.Component {

    selecionarEvento(e) {
        console.log(this.props);
    }

    render() {

        const { titulo } = this.props;
        const { eventoId } = this.props;

        return (
            <div class="col-md-4">
                <h4>{ titulo }</h4>
                <h4>{ eventoId }</h4>
                <p>Laaaaaorem ipsum dolor sit amet.</p>
                <Link to={"visualizar-disponibilidades/" + eventoId } teste={eventoId} >
                    <button class="btn btn-default">Selecionar acento</button>
                </Link>
            </div>
        );
    }
}
