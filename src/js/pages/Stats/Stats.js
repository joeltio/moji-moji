import React from "react";

import Header from "../../components/Header/Header";
import EmojiCountTable from "../../components/EmojiCountTable/EmojiCountTable";

import styles from "./stats.scss";


const uuidv4 = require('uuid/v4');
export default class Stats extends React.Component {
    render() {
        if (localStorage.getItem("moji-moji") === null) {
            const account = {
                "uuid": uuidv4(),
                "emojis": {},
                "pastEmojis": []
            }
            localStorage.setItem("moji-moji", JSON.stringify(account))
        }

        const {uuid, emojis} = JSON.parse(localStorage.getItem("moji-moji"));
        const num_emojis = Object.values(emojis).reduce((a, b) => a + b, 0);

        var phrase;
        if (num_emojis == 0) {
            phrase = "nothing here yet, go get some emojis!";
        } else if (num_emojis < 10) {
            phrase = "you seem lonely";
        } else if (num_emojis < 100) {
            phrase = "😐👌";
        } else if (num_emojis == 100) {
            phrase = "💯💯💯";
        } else {
            phrase = "you're 🔥🔥🔥";
        }

        return (
            <div className={styles.container}>
                <Header text={phrase}/>
                <EmojiCountTable emojis={emojis}/>
            </div>
        );
    }
}