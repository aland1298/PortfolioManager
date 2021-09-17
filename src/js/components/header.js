import React from 'react';
import "../../sass/header.scss"
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
        <header id="header-container">
            <ul id="header-list-container">
                <li><Link id="link" to="/">Portfolio Manager</Link></li>
                <li><h1>{props.header}</h1></li>
            </ul>
        </header>
    )
};

export default Header;