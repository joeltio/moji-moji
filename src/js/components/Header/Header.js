import React from "react";

import styles from "./header.scss";

export default class Header extends React.Component {
    render() {
        return (
            <h1>{this.props.text}</h1>
        );
    }
}