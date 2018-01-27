import React from "react";
import { Redirect } from 'react-router'

import Header from "../../components/Header/Header";
import Emoji from "../../components/Emoji/Emoji";

import styles from "./receive.scss";

const uuidv4 = require('uuid/v4');
export default class Receive extends React.Component {
    render() {
        const data = this.props.match.params.id;
        console.log(data);
        var [senderUuid, emojiUuid, emoji] = data.split(" ");

        if (localStorage.getItem("moji-moji") === null) {
            const account = {
                "uuid": uuidv4(),
                "emojis": {},
                "pastEmojis": []
            }
            localStorage.setItem("moji-moji", JSON.stringify(account))
        }
        const { uuid, pastEmojis } = JSON.parse(localStorage.getItem("moji-moji"));

        var invalid = false;
        console.log(pastEmojis);
        if (pastEmojis.indexOf(data) > -1) {
            invalid = true;
            console.log("there");
        } else if (emojiUuid.length != 36 || senderUuid.length != 36) {
            invalid = true;
            console.log("here");
        } else if (senderUuid === uuid) {
            console.log("everywhere");
            invalid = true;
        }

        var toRender;
        if (invalid) {
            toRender = (<Redirect to="/" />);
        } else {
            var account = JSON.parse(localStorage.getItem("moji-moji"));
            account["pastEmojis"].push(data);
            account["emojis"][emoji] += 1;
            localStorage.setItem("moji-moji", JSON.stringify(account));
            toRender = (
                <div className={styles.container}>
                    <Header text="you got" />
                    <Emoji emoji={emoji}/>
                    <Header text="!!!" />
                </div>
            );
        }

        return toRender;
    }
}