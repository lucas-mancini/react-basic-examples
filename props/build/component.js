var HelloUser = React.createClass({
    displayName: "HelloUser",

    render: function () {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name,
            "! ",
            React.createElement("br", null)
        );
    }
});

ReactDOM.render(React.createElement(HelloUser, { name: "Lucas" }), document.getElementById('app'));