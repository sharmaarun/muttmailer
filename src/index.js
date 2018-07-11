import React from "react";
import SendMail from "./components/sendmail/sendmail";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from './reducers';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainContainer from "./components/container/main-container";
import Demo from "./components/demo/demo";
import "./index.css"

let storeMain = applyMiddleware(thunk)(createStore)(rootReducer);


render(
    <Provider store={storeMain}>
        <Router>
            <div>
                <Demo/>
            <MainContainer />
            <Route exact path="/" component={SendMail} />
            </div>
        </Router>
        
    </Provider>
    , document.getElementById("root")
);
