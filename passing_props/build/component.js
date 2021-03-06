var FriendsContainer = React.createClass({
    displayName: 'FriendsContainer',

    getInitialState: function () {
        return {
            name: 'Lucas Mancini',
            friends: ['Florencia Lizziero', 'Florencia Libertini', 'Guillermo Rossi']
        };
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
            React.createElement(ShowList, { names: this.state.friends })
        );
    }
});

var ShowList = React.createClass({
    displayName: 'ShowList',

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