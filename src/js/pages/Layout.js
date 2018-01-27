import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import Stats from "./Stats/Stats";
import Send from "./Send/Send";
import Receive from "./Receive/Receive";

export default class Layout extends React.Component {
    render() {
        const Navs = [
            ["Stats", "/"],
            ["Send", "/send"],
            ["Receive", "/receive"]
        ];

        return (
            <div>
                <Route exact path="/" component={Stats}></Route>
                <Route path="/send" component={Send}></Route>
                <Route path="/receive/:id" component={Receive}></Route>
            </div>
        );
    }
}