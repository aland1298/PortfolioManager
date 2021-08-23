import React from 'react';
import {Link} from "react-router-dom";
import "../../sass/navbar.scss";

const MainNav = () => {
    return (
        <ul id="list">
            <li><Link to="/"><img src="/src/img/logo.svg" alt="home" /></Link></li>
            <li><Link to="/home"><img src="/src/img/home.svg" alt="home" /></Link></li>
            <li><Link to="/client"><img src="/src/img/profile.svg" alt="client" /></Link></li>
            <li><Link to="/company"><img src="/src/img/barchart.svg" alt="company" /></Link></li>
        </ul>
    )
}

export default MainNav;