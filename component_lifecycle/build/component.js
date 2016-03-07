var FriendsContainer = React.createClass({
    displayName: 'FriendsContainer',

    getInitialState: function () {
        alert('In getInitialState');
        return {
            name: 'Lucas Mancini',
            friends: ['Florencia Lizziero', 'Florencia Libertini', 'Guillermo Rossi']
        };
    },
    addFriend: function (friend) {
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                ' Name: ',
                this.state.name,
                ' '
            ),
            React.createElement(AddFriend, { addNew: this.addFriend }),
            React.createElement(ShowList, { names: this.state.friends })
        );
    },
    // Lifecycle methods:
    componentWillMount: function () {
        alert('In component will mount');
        // called once before the initial render
        // useful to set up references to Firebase DB for example
    },
    componentDidMount: function () {
        alert('In component did mount');
        // called after component was rendered for the first time
        // useful to do Ajax calls here
        // virtual DOM available here
    },
    componentWillReceiveProps: function (nextProps) {
        alert('In component will receive props');
        // before rendering the component, and after a prop changes, the
        // state can be updated here using setState()
    },
    componentWillUnmount: function () {
        // for cleaning up, e.g.: tear down Firebase DB reference
    }
});

var AddFriend = React.createClass({
    displayName: 'AddFriend',

    getInitialState: function () {
        return {
            newFriend: ''
        };
    },
    propTypes: {
        addNew: React.PropTypes.func.isRequired
    },
    updateNewFriend: function (e) {
        this.setState({
            newFriend: e.target.value
        });
    },
    handleAddNew: function () {
        this.props.addNew(this.state.newFriend); // execute setter to change state in parent
        // update current state of this component
        this.setState({
            newFriend: ''
        });
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement('input', { type: 'text', value: this.state.newFriend, onChange: this.updateNewFriend }),
            React.createElement(
                'button',
                { onClick: this.handleAddNew },
                'Add Friend'
            )
        );
    }
});

var ShowList = React.createClass({
    displayName: 'ShowList',

    getDefaultProps: function () {
        return {
            names: []
        };
    },
    render: function () {
        var listItems = this.props.names.map(function (friend) {
            return React.createElement(
                'li',
                null,
                friend
            );
        });
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'Friends'
            ),
            React.createElement(
                'ul',
                null,
                listItems
            )
        );
    }
});

ReactDOM.render(React.createElement(FriendsContainer, null), document.getElementById('app'));