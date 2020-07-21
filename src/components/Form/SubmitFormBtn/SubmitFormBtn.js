import React from "react";
import styles from "../Form.module.css";
import {useSelector} from "react-redux";

export const SubmitFormBtn = () => {

    const state = useSelector(state => state);

    return (
        <button className={
            state.every(item => item.inputVerificationResult === true)
                ? styles["btn-submit"]
                : styles["btn-submit-disabled"]}

                type="submit"

                disabled={!state.every(item => item.inputVerificationResult === true)}
        >
            Зарегистрироваться
        </button>
    )
}