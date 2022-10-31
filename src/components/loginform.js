import React from 'react';

export default class LogInForm extends React.Component {
    render() {
        return (
            <div id="container" className="container">
                <h3 className="heading">Log In</h3>
                <div className="form">
                    <form>
                        <div className="input-container">
                            <label>Username</label>
                            <input type="text" name="name" required />
                        </div><br />
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password" name="pass" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}