import React, {useEffect} from "react";
import "../../sass/home.scss";
import handleDropdown from "../handlers/handle-dropdown";

const Home = (props) => {

    useEffect(() => {
        document.title="Home";
        props.setHeader("Home");
    })

    return (
        <section id="home-container">
            <nav role="navigation">
                <header onClick={() => {handleDropdown()}}>
                    <span className="navigation" aria-haspopup="true">
                        Select a Client
                    </span>
                    <img id="arrow-img" src="/src/img/arrow-down.svg" alt="dropdown arrow" />
                </header>
                <ul id="dropdown-container" className="dropdown" aria-label="submenu">
                    <li>Alan</li>
                    <li>Madison</li>
                    <li>Ola</li>
                    <li>Tim</li>
                </ul>
            </nav>
        </section>
    )
}

export default Home;