import React from "react";
import copy from 'copy-to-clipboard';

import Emoji from "../Emoji/Emoji";

import styles from "./emojiButton.scss";

const uuidv4 = require('uuid/v4');
export default class EmojiButton extends React.Component {
    getCurrentUuid() {
        const {uuid} = JSON.parse(localStorage.getItem("moji-moji"));
        return uuid;
    }

    copyLinkToBoard(event) {
        const new_link = this.getCurrentUuid() + " " + uuidv4() + " " + this.props.emoji;
        copy("https://joeltio.github.io/moji-moji/#/receive/" + encodeURIComponent(new_link));
    }

    render() {
        return (
            <div onClick={this.copyLinkToBoard.bind(this)} className={styles.container}>
                <Emoji emoji={this.props.emoji} />
            </div>
        );
    }
}