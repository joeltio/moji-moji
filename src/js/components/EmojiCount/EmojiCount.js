import React from "react";

import EmojiButton from "../EmojiButton/EmojiButton";

import styles from "./emojiCount.scss";

export default class EmojiCount extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <EmojiButton emoji={this.props.emoji} />
                <p className={styles.count}>x{ this.props.count }</p>
            </div>
        );
    }
}