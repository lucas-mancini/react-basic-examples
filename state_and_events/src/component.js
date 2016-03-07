var HelloUser = React.createClass({
    getInitialState: function() {
        return {
            username: '@lucasmancini'
        }
    },
    handleState: function(e) {
        this.setState({
            username: e.target.value
        });
    },
    render: function() {
        return(
            <div>
                Hello {this.state.username}! <br />
                Change name: <input type="text" value={this.state.username} onChange={this.handleState} />
            </div>
        )
    }
});

ReactDOM.render(<HelloUser />, document.getElementById('app'));