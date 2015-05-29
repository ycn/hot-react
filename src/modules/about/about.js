'use strict';

var AboutBox = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>debug: {this.props.props.aboutName}</p>
            </div>
        );
    }
});

module.exports = AboutBox;