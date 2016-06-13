import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';

export default AuthenticatedComponent(class Home extends React.Component {
  render() {

    console.log(this.props);

    return (<h1>Hello { this.props.userDetails ? this.props.userDetails.name : 'sem nome' } {this.props.user ? this.props.user.username : ''}</h1>);
  }
});
