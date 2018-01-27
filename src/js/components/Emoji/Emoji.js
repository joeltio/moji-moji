import React from "react";

import styles from "./emoji.scss";

export default class Emoji extends React.Component {
    render() {
        return (
            <p className={styles.emoji}>{this.props.emoji}</p>
        )
    }
}