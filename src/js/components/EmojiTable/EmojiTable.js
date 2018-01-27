import React from "react";

import EmojiBox from "../EmojiBox/EmojiBox";

import styles from "./emojiTable.scss";

export default class EmojiTable extends React.Component {
    render() {
        var rows = [];
        for (let emoji of this.props.emojis) {
            rows.push(<EmojiBox key={emoji} emoji={emoji} />);
        };
        return (
            <div className={styles.container}>
                {rows}
            </div>
        );
    }
}
