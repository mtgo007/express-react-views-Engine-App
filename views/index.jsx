var React = require('react');
var DefaultLayout = require('./layouts/default');
var Users = require('./users.jsx');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <Users users = {this.props.users}></Users>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;