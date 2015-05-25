var App = React.createClass({
    getInitialState: function () {
        return {
            users: [
                {name: 'User 1', active: true},
                {name: 'User 2', active: false},
                {name: 'User 3', active: true},
                {name: 'User 4', active: true},
                {name: 'User 5', active: false}
            ]
        }
    },
    handleToggleUser: function(userPositionToToggle) {
        this.setState(
            {users: this.state.users.map(function(user, i) {
                return i === userPositionToToggle ? {name: user.name, active: !user.active} : user;
            })}
        );
    },
    render: function () {
        return (
            <table>
            {this.state.users.map(function (user, i) {
                return (<User key={i} user={user} onToggleUser={this.handleToggleUser.bind(this, i)}/>);
            }, this)}
            </table>
        );
    }
});

var User = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td><a href="#" onClick={this.props.onToggleUser}>{this.props.user.active ? 'active' : 'deactive'}</a></td>
            </tr>
        );
    }
});