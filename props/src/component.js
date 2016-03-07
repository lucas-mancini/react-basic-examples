var HelloUser = React.createClass({
    render: function() {
        return(
            <div>
                Hello {this.props.name}! <br />
            </div>
        )
    }
});

ReactDOM.render(<HelloUser name="Lucas" />, document.getElementById('app'));