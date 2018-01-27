import React from "react";

import EmojiBox from "../EmojiBox/EmojiBox";

import styles from "./emojiCount.scss";

export default class EmojiCount extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <EmojiBox emoji={this.props.emoji} />
                <p className={styles.count}>x{ this.props.count }</p>
            </div>
        );
    }
}