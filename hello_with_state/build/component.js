var HelloUser = React.createClass({
    displayName: 'HelloUser',

    getInitialState: function () {
        return {
            username: '@lucasmancini'
        };
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            'Hello ',
            this.state.username,
            '!'
        );
    }
});

ReactDOM.render(React.createElement(HelloUser, null), document.getElementById('app'));