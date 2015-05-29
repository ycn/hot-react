'use strict';

console.log('[mod:loaded] app');

window.React = React;
window.Backbone = Backbone;

var Config = require('constants/config');

var AboutBox = require('about');
var LoginForm = require('login');
var CommentBox = require('hello');

var App = React.createClass({
    render: function () {
        var Child = this.props.route;
        return (
            <div>
                <h1>App</h1>
                <Child props={this.props}/>
            </div>
        );
    }
});


var Router = Backbone.Router.extend({

    routes: {
        "": 'login',
        "about(/)(:name)": 'about',
        "comment": 'comment',
        "login": 'login',
        '*path': 'notFound'
    },

    initialize: function () {
        this.container = document.getElementById("app");
    },

    login: function () {
        var Route = LoginForm;
        React.render(<App route={Route} />, this.container);
    },

    about: function (name) {
        var Route = AboutBox;
        React.render(<App route={Route} aboutName={name} />, this.container);
    },

    comment: function () {
        var Route = CommentBox;
        React.render(<App route={Route} />, this.container);
    },

    notFound: function (path) {
        var Route = LoginForm;
        React.render(<App route={Route} />, this.container);
    }

});

new Router();
Backbone.history.start();