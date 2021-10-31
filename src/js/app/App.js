import React from "react";
import {Route, Switch} from "react-router-dom";
import MainNav from "../components/nav-bar";
import Client from "../view/client/client";
import Company from "../view/company/company";
import Home from "../view/home/home";
import "../../default/reset.scss";
import "../../default/styles.scss";
import "../../sass/stockportfolio.scss";
import HeaderComponent from "../view/home/features/featureHeader/headerComponent";

const App = () => {

    return (
        <main>
            <header id='header-container'>
                <HeaderComponent />
            </header>
            <section id='component-container'>
                <section id='nav-container'>
                    <MainNav />
                </section>
                <div id='route-container'>
                    <Switch>
                        <Route path='/' exact render={() => <Home />} />
                        <Route path='/home' exact render={() => <Home />} />
                        <Route path='/client' exact render={() => <Client />} />
                        <Route path='/company' exact render={() => <Company />} />
                    </Switch>
                </div>
            </section>
        </main>
    )
}

export default App;