import React from "react";
import { Redirect } from 'react-router'

import Header from "../../components/Header/Header";
import Emoji from "../../components/Emoji/Emoji";

import styles from "./receive.scss";

const uuidv4 = require('uuid/v4');
export default class Receive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {redirect: null};
    }

    render() {
        const data = this.props.match.params.id;
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
        if (pastEmojis.indexOf(senderUuid + emojiUuid) > -1) {
            invalid = true;
        } else if (emojiUuid.length != 36 || senderUuid.length != 36) {
            invalid = true;
        } else if (senderUuid === uuid) {
            invalid = true;
        }

        var toRender;
        if (invalid) {
            toRender = (<Redirect to="/" />);
        } else {
            var account = JSON.parse(localStorage.getItem("moji-moji"));
            console.log(senderUuid);
            console.log(emojiUuid);
            account["pastEmojis"].push(senderUuid + emojiUuid);
            if (account["emojis"][emoji] === undefined) {
                account["emojis"][emoji] = 0;
            }
            account["emojis"][emoji] += 1;
            localStorage.setItem("moji-moji", JSON.stringify(account));
            toRender = (
                <div className={styles.container}>
                    <Header text="you got" />
                    <Emoji emoji={emoji}/>
                    <Header text="!!!" />
                    {this.state.redirect}
                </div>
            );
        }

        window.setTimeout(function() {
            this.setState({redirect: (<Redirect to="/" />)})
        }.bind(this), 3000);

        return toRender;
    }
}