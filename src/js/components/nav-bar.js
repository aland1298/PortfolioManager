import React from 'react';
import {Link} from "react-router-dom";
import "../../sass/navbar.scss";

const MainNav = () => {
    return (
        <div id="aside-container">
            <ul id="list">
                <li><Link className="nav-link" to="/home"><img src="/src/img/home.svg" alt="home"/></Link></li>
                <li><Link className="nav-link" to="/client"><img src="/src/img/profile.svg" alt="client" /></Link></li>
                <li><Link className="nav-link" to="/company"><img src="/src/img/barchart.svg" alt="company" /></Link></li>
            </ul>
        </div>
    )
}

export default MainNav;