var App = React.createClass({
    getDefaultProps: function () {
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
    render: function () {
        return (
            <table>
            {this.props.users.map(function (user, i) {
                return (<User key={i} user={user}/>);
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
                <td>{this.props.user.active ? 'active' : 'deactive'}</td>
            </tr>
        );
    }
});