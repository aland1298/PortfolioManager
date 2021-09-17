import ReactDOM from "react-dom";
import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainNav from "../components/nav-bar";
import Client from "../view/client";
import Company from "../view/company";
import Home from "../view/home";
import "../../default/reset.scss";
import "../../default/styles.scss";
import "../../sass/stockportfolio.scss";
import Header from "../components/header";
import HeaderContextProvider from "../context/header";

const StockPortfolio = () => {
    const [header, setHeader] = useState("Home");

    return (
        <main>
            <header id="header-container">
                <Header header={header}/>
            </header>
            <section id="component-container">
                <section id="nav-container">
                    <MainNav setHeader={setHeader}/>
                </section>
                <div id="route-container">
                    <HeaderContextProvider>
                        <Switch>
                            <Route path="/" exact render={() =>
                                <Home setHeader={setHeader} />
                            } />
                            <Route path="/home" exact render={() =>
                                <Home setHeader={setHeader} />
                            } />
                            <Route path="/client" exact render={() =>
                                <Client setHeader={setHeader} />
                            } />
                            <Route path="/company" exact render={() =>
                                <Company setHeader={setHeader} />
                            } />
                        </Switch>
                    </HeaderContextProvider>
                </div>
            </section>
        </main>
    )
}

ReactDOM.render(<BrowserRouter><StockPortfolio /></BrowserRouter>, document.getElementById("body"));