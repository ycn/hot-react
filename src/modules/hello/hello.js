'use strict';

var Config = require('constants/config');
var DataUrl = Config.ContextPath + __uri("hello.json");


var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment key={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                <input type="text" />
                <button type="submit">提交</button>
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function () {
        this.url = DataUrl;
        return {data: []};
    },
    loadCommentsFromServer: function () {
        var self = this;
        $.getJSON(self.url, function (data) {
            self.setState({data: data});
        });
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
});

module.exports = CommentBox;