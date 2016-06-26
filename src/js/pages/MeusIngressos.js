import React from "react";
import AuthenticatedComponent from '../components/AuthenticatedComponent';
import IngressoVendidoStore from '../stores/IngressoVendidoStore';
import * as IngressoVendidoActions from '../actions/IngressoVendidoActions';
import IngressoVendido from "../components/IngressoVendido";

export default AuthenticatedComponent(class MeusIngressos extends React.Component {

	constructor() {
		super();
		this.onReceiveMeusIngressos = this.onReceiveMeusIngressos.bind(this);
		this.state = {
			meusIngressos : IngressoVendidoStore.getIngressos()
		};
	}

	componentWillMount() {
      IngressoVendidoStore.on("change", this.onReceiveMeusIngressos);

	  IngressoVendidoActions.fetchIngressosVendidos();
    }

	componentWillUnmount() {
	  IngressoVendidoStore.removeListener("change", this.onReceiveMeusIngressos);
	}

	onReceiveMeusIngressos() {
		console.log('retornou ingressos');
		this.setState({
			meusIngressos : IngressoVendidoStore.getIngressos()
		});
	}


	render() {

            var MeusIngressosVendidos = null;

            if(this.state.meusIngressos != null) {
                MeusIngressosVendidos = this.state.meusIngressos.map((ingressoVendido, index) =>
                	<IngressoVendido key={index}
						{...ingressoVendido} />
            	);
            }

          return (
               <div>
                    <div class="row">
						<div class="col s12 m6">
							{ MeusIngressosVendidos ? MeusIngressosVendidos : 'Carregando meus ingressos comprados...' }
						</div>
					</div>
               </div>
          );
     }
});
