import React from "react";
import { Link } from "react-router-dom";

import styles from "./giveButton.scss";

export default class GiveButton extends React.Component {
    render() {
        return (
            <Link className={styles.route} to="send">
                <div className={styles.container}>
                    <h2 className={styles.text}>Give</h2>
                </div>
            </Link>
        );
    }
}
