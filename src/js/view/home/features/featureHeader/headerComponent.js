import React from 'react';
import "../../../../../sass/header.scss"
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectHeader} from "./headerSelectors";

const HeaderComponent = () => {
    const header = useSelector(selectHeader);

    return (
        <header id="header-container">
            <ul id="header-list-container">
                <li><Link id="link" to="/">Portfolio Manager</Link></li>
                <li><h1>{header}</h1></li>
            </ul>
        </header>
    )
};

export default HeaderComponent;