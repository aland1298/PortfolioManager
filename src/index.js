import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from './js/app/App';
import {Provider} from "react-redux";
import store from "./js/app/store";
import './default/font.scss';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('body')
);