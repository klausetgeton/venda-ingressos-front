import React from "react";
import Evento from "../components/Evento";
import * as PossibilidadeActions from '../actions/PossibilidadeActions';
import * as EventoActions from '../actions/EventoActions';
import EventoStore from '../stores/EventoStore';

export default class ListagemEventos extends React.Component {

    constructor() {
        super();
        this.onReceiveEventos = this.onReceiveEventos.bind(this);
        this.state = {
            eventos: null
        };
    }

    componentWillMount() {
        // Registra a escuta para quando houver alteração dos Eventos
        EventoStore.on("change", this.onReceiveEventos);

        // Solicita o download dos Eventos
        EventoActions.fetchEventos();
    }

	componentWillUnmount() {
        EventoStore.removeListener("change", this.onReceiveEventos);
	}

	onReceiveEventos() {
		this.setState({
			eventos : EventoStore.getEventos()
		});
	}

    render() {

            var Eventos = null;

            if(this.state.eventos != null) {
                Eventos = this.state.eventos.map(evento => {

                    console.log(evento);
                    return <Evento key={evento.id} titulo={evento.nome} descricao={evento.descricao} eventoId={evento.id} />

                } );
            }

          return (
               <div>
                    <div class="row">
						{Eventos ? Eventos : 'Carregando eventos...'}
					</div>
               </div>
          );
     }
}
