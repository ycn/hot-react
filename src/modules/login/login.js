'use strict';

var LoginForm = React.createClass({
    render: function () {
        return (
            <div className="loginForm">
                <p>
                    <label>Account:</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Password:</label>
                    <input type="password" />
                </p>
                <button type="submit">登录</button>
            </div>
        );
    }
});

module.exports = LoginForm;