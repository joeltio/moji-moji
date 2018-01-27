import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Switch } from "react-router";
import createHashHistory from 'history/createHashHistory';

import Layout from "./pages/Layout";

const hashHistory = createHashHistory();
const app = document.getElementById("app");
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}></Route>
    </Router>,
app);