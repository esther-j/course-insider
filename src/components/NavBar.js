import React from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <Link className="nav-item" to="/">
                    <img src={require("../assets/logo.svg")} />
                </Link>
            </nav>
        );
    }
};