import React from "react";

import EmojiCount from "../EmojiCount/EmojiCount";
import LinkButton from "../../components/LinkButton/LinkButton";

import styles from "./emojiCountTable.scss";

export default class EmojiCountTable extends React.Component {
    render() {
        var rows = [];
        for (var emoji in this.props.emojis) {
            rows.push(<EmojiCount key={emoji} emoji={emoji} count={this.props.emojis[emoji]} />)
        }

        return (
            <div className={styles.container}>
                <LinkButton to="send" text="Give" />
                {rows}
            </div>
        );
    }
}
