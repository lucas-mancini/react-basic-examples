var HelloUser = React.createClass({
    getInitialState: function() {
        return {
            username: '@lucasmancini'
        }
    },
    render: function() {
        return(
            <div>
                Hello {this.state.username}!
            </div>
        )
    }
});

ReactDOM.render(<HelloUser />, document.getElementById('app'));