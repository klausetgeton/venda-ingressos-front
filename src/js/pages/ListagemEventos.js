import React from "react";
import Evento from "../components/Evento";
import * as PossibilidadeActions from '../actions/PossibilidadeActions';

export default class ListagemEventos extends React.Component {

    componentWillMount() {
	  // PENSAR MELHOR AONDE COLOCAR A ACAO PARA BUSCAR OS DADOS DOS EVENTOS
	  PossibilidadeActions.fetchPossibilidades();
    }

     render() {
          const Eventos = [
               "Some Article",
               "Some Other Article",
               "Yet Another Article",
               "Still More",
               "Some Article",
               "Some Other Article",
               "Yet Another Article",
               "Still More",
               "Some Article",
               "Some Other Article",
               "Yet Another Article",
               "Still More",
          ].map((titulo, i) => <Evento key={i} titulo={titulo} eventoId={i} /> );

          return (
               <div>
                    <div class="row">
						{Eventos}
					</div>
               </div>
          );
     }
}
