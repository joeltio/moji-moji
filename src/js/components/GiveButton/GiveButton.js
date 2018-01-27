import React from "react";
import { Link } from "react-router-dom";

import LongButton from "../../components/LongButton/LongButton";
import styles from "./giveButton.scss";

export default class GiveButton extends React.Component {
    render() {
        return (
            <Link className={styles.route} to="send">
                <LongButton text="Give" />
            </Link>
        );
    }
}
