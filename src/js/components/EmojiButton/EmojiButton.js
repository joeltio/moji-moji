import React from "react";
import copy from 'copy-to-clipboard';

import Emoji from "../Emoji/Emoji";

import styles from "./emojiButton.scss";

const uuidv4 = require('uuid/v4');
export default class EmojiButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {emoji: <Emoji emoji={props.emoji} />};
    }

    getCurrentUuid() {
        const {uuid} = JSON.parse(localStorage.getItem("moji-moji"));
        return uuid;
    }

    copyLinkToBoard(event) {
        const new_link = this.getCurrentUuid() + " " + uuidv4() + " " + this.props.emoji;
        copy("https://joeltio.github.io/moji-moji/#/receive/" + encodeURIComponent(new_link));
        this.replaceWithText("Copied!");
    }

    replaceWithText(text) {
        this.setState({emoji: (<p>{text}</p>)})
        window.setTimeout(function() {
            this.setState({emoji: <Emoji emoji={this.props.emoji} />})
        }.bind(this), 300);
    }

    render() {
        return (
            <div onClick={this.copyLinkToBoard.bind(this)} className={styles.container}>
                {this.state.emoji}
            </div>
        );
    }
}