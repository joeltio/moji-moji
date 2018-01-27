import React from "react";

import Emoji from "../Emoji/Emoji";

import styles from "./emojiButton.scss";

export default class EmojiButton extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Emoji emoji={this.props.emoji} />
            </div>
        );
    }
}