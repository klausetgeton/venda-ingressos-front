import React from "react";
import { Link } from "react-router";

export default class extends React.Component {

    selecionarEvento(e) {
        console.log(this.props);
    }

    render() {

        const { titulo } = this.props;
        const { eventoId } = this.props;

        const Espacamentos = {
            divEvento : {
                marginLeft : "10px",
                marginBottom : "30px"
            }
        }

        return (
            <div class="col-md-4" style={Espacamentos.divEvento} >

                <h5>{ titulo }</h5>
                <h5>{ eventoId }</h5>

                <p>Laaaaaorem ipsum dolor sit amet.</p>

                <Link to={"visualizar-possibilidades/" + eventoId } teste={eventoId} >
                    <button class="btn btn-default">Selecionar acento</button>
                </Link>
            </div>
        );
    }
}
