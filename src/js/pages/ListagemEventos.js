import React from "react";

import Evento from "../components/Evento";

export default class ListagemEventos extends React.Component {

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
