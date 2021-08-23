import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import MainNav from "../components/nav-bar";
import Client from "../view/client";
import Company from "../view/company";
import Home from "../view/home";
import "../../default/reset.scss";
import "../../default/styles.scss";
import "../../sass/stockportfolio.scss";
import Header from "../components/header";

const StockPortfolio = () => {
    return (
        <main>
            <section id="nav-container">
                <MainNav />
            </section>
            <section id="component-container">
                <header id="header-container">
                    <Header title="Home" />
                </header>
                <div id="route-container">
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/client" exact component={Client} />
                    <Route path="/company" exact component={Company} />
                </div>
            </section>
        </main>
    )
}

ReactDOM.render(<BrowserRouter><StockPortfolio /></BrowserRouter>, document.getElementById("body"));