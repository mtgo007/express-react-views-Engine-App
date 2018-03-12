var React = require('react');
var User = require('./user');
var users;

class Users extends React.Component {
  render() {
    if(this.props.users){
        users = this.props.users;
        users = this.props.users.map(user =>{
            return (<User key={user.nome} user={user} />)
        });
    }
    return(
        <ul>{users}</ul>
    )
  }
}

module.exports = Users;