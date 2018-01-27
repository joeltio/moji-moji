import React from "react";

import Emoji from "../Emoji/Emoji";

import styles from "./emojiBox.scss";

export default class EmojiBox extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Emoji emoji={this.props.emoji} />
            </div>
        );
    }
}