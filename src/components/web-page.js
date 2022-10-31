import React from "react";
import LogInForm from "./loginform";
import NavBar from "./navbar";

export default class WebPage extends React.Component {
    render() {
        return (
            <div className="fluid-container">
                <NavBar /><br />
                <LogInForm />
            </div>
        );
    }
}