import React from "react";

import Header from "../../components/Header/Header";
import EmojiTable from "../../components/EmojiTable/EmojiTable"

import styles from "./send.scss";

import emojis from "../../../../res/emojis.txt";

export default class Send extends React.Component {
    render() {
        const split_emojis = emojis.split(" ");
        return (
            <div className={styles.container}>
                <Header text="Choose" />
                <EmojiTable emojis={split_emojis}/>
            </div>
        );
    }
}