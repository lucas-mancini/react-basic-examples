var HelloUser = React.createClass({
    displayName: 'HelloUser',

    getInitialState: function () {
        return {
            username: '@lucasmancini'
        };
    },
    handleState: function (e) {
        this.setState({
            username: e.target.value
        });
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            'Hello ',
            this.state.username,
            '! ',
            React.createElement('br', null),
            'Change name: ',
            React.createElement('input', { type: 'text', value: this.state.username, onChange: this.handleState })
        );
    }
});

ReactDOM.render(React.createElement(HelloUser, null), document.getElementById('app'));