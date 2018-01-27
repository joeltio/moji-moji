import React from "react";

import Header from "../../components/Header/Header";
import EmojiTable from "../../components/EmojiTable/EmojiTable"

import styles from "./send.scss";

import emojis from "../../../../res/emojis.txt";

const uuidv4 = require('uuid/v4');
export default class Send extends React.Component {
    render() {
        if (localStorage.getItem("moji-moji") === null) {
            const account = {
                "uuid": uuidv4(),
                "emojis": {},
                "pastEmojis": []
            }
            localStorage.setItem("moji-moji", JSON.stringify(account))
        }

        const split_emojis = emojis.split(" ");
        return (
            <div className={styles.container}>
                <Header text="Choose" />
                <EmojiTable emojis={split_emojis}/>
            </div>
        );
    }
}