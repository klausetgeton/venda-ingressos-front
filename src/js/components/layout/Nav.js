import React from "react";
import { IndexLink, Link } from "react-router";
import LoginStore from '../../stores/LoginStore';
import AuthService from '../../services/AuthService';

export default class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            collapsed: false,
            userLoggedIn: LoginStore.isLoggedIn()
        };
    }

    // constructor() {
    //     super();
    //     this.state = this._getLoginState();
    // }

    _getLoginState() {
        return {
            userLoggedIn: LoginStore.isLoggedIn()
        };
    }

    componentDidMount() {
        this.changeListener = this._onChange.bind(this);
        LoginStore.addChangeListener(this.changeListener);
    }

    _onChange() {
        this.setState(this._getLoginState());
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this.changeListener);
    }

    logout(e) {
        e.preventDefault();
        AuthService.logout();
    }

    toggleCollapse() {
        const collapsed = ! this.state.collapsed;
        this.setState({collapsed});
    }

    collapse() {
        const collapsed = false;
        this.setState({collapsed});
    }

    render() {

        const { location } = this.props;
        const { collapsed } = this.state;
        const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
        const eventosClass = location.pathname.match(/^\/eventos/) ? "active" : "";
        const cadastroClass = location.pathname.match(/^\/cadastro/) ? "active" : "";

        const featuredClass = location.pathname === "/" ? "active" : "";
        const archivesClass = location.pathname.match(/^\/favorites/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const todosClass = location.pathname.match(/^\/todos/) ? "active" : "";

        // Estilos
        const SideNavStyle = {
            aberto: {
                transform: 'translateX(0px)'
            },
            fechado: {
                transform: 'translateX(-100%)'
            }
        };

        const Espacamentos = {
            MarginLeft : {
                marginLeft : "10px"
            }
        }


        return (
            <nav>
                <div class="nav-wrapper">
                    <text class="brand-logo" style={Espacamentos.MarginLeft} >ingresso.dev</text>
                    <a data-activates="mobile-demo" class="button-collapse"><i class="material-icons" style={Espacamentos.MarginLeft} onClick={this.toggleCollapse.bind(this)}>menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li class={featuredClass}>
                            <IndexLink to="/" onClick={this.collapse.bind(this)}>Eventos</IndexLink>
                        </li>
                        <li class={todosClass}>
                            <Link to="todos" onClick={this.collapse.bind(this)}>Todos</Link>
                        </li>
                        <li class={cadastroClass}>
                            <Link to="cadastro" onClick={this.collapse.bind(this)}>Cadastro</Link>
                        </li>
                        <li class={settingsClass}>
                            <Link to="settings" onClick={this.collapse.bind(this)}>Settings</Link>
                        </li>



                        <li class={loginClass}>
                            <Link to="login" onClick={this.collapse.bind(this)}>Login</Link>
                        </li>
                        <li class={loginClass}>
                            <Link to="signup" onClick={this.collapse.bind(this)}>Signup</Link>
                        </li>
                        <li class={loginClass}>
                            <Link to="home" onClick={this.collapse.bind(this)}>home</Link>
                        </li>
                        <li>
                            { this.state.userLoggedIn ? 'logado' : 'n logado' }
                        </li>
                        <li>
                            <a href="" onClick={this.logout}>Logout</a>
                        </li>
                    </ul>
                    <ul class="side-nav" id="mobile-demo" style={ collapsed ? SideNavStyle.aberto : SideNavStyle.fechado } >
                        <li class={featuredClass}>
                            <IndexLink to="/" onClick={this.collapse.bind(this)}>Eventos</IndexLink>
                        </li>
                        <li class={todosClass}>
                            <Link to="todos" onClick={this.collapse.bind(this)}>Todos</Link>
                        </li>
                        <li class={cadastroClass}>
                            <Link to="cadastro" onClick={this.collapse.bind(this)}>Cadastro</Link>
                        </li>
                        <li class={settingsClass}>
                            <Link to="settings" onClick={this.collapse.bind(this)}>Settings</Link>
                        </li>



                        <li class={loginClass}>
                            <Link to="login" onClick={this.collapse.bind(this)}>Login</Link>
                        </li>
                        <li class={loginClass}>
                            <Link to="signup" onClick={this.collapse.bind(this)}>Signup</Link>
                        </li>
                        <li class={loginClass}>
                            <Link to="home" onClick={this.collapse.bind(this)}>home</Link>
                        </li>
                        <li>
                            { this.state.userLoggedIn ? 'logado' : 'n logado' }
                        </li>
                        <li>
                            <a href="" onClick={this.logout.bind(this)}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
