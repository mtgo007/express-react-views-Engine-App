var React = require('react');
var DefaultLayout = require('./layouts/default');

class User extends React.Component {
  render() {
    return (
      <li>Olá {this.props.user.nome} {this.props.user.sobrenome} você tem {this.props.user.idade} Anos</li>
    );
  }
}

module.exports = User;