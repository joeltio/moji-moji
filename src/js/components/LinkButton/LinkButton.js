import React from "react";
import { Link } from "react-router-dom";

import LongButton from "../../components/LongButton/LongButton";
import styles from "./linkButton.scss";

export default class LinkButton extends React.Component {
    render() {
        return (
            <Link className={styles.route} to={this.props.to}>
                <LongButton text={this.props.text} />
            </Link>
        );
    }
}
