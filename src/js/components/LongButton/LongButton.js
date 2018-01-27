import React from "react";
import { Link } from "react-router-dom";

import styles from "./longButton.scss";

export default class LongButton extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.text} >{this.props.text}</h2>
            </div>
        );
    }
}
