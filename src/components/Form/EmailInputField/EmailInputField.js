import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {inputHandlerNew} from "../../../store/actionCreators/inputHandler";
import doneIcon from "../../../img/done.svg";
import styles from "../Form.module.css";

export const EmailInputField = () => {

    const state = useSelector(state => state.find((item) => item.inputId === "emailInputField"));
    const dispatch = useDispatch();

    const [placeholder, setPlaceholder] = useState("Электронная почта");

    return (
        <div className={styles["input-wrapper"]}>
            <label className={styles["display-none"]} htmlFor="emailInputField">Почта</label>
            <input id="emailInputField"
                   className={styles["input-field"]}
                   type="email"
                   name="email"
                   onFocus={() => setPlaceholder("example@mail.com")}
                   onBlur={() => setPlaceholder("Электронная почта")}
                   placeholder={placeholder}
                   required
                   value={state.inputValue}
                   onChange={(event) => dispatch(inputHandlerNew(event))}
            />

            {
                state.inputVerificationResult &&
                <span className={styles["input-verification-result-block"]}>
                    <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                </span>
            }
        </div>
    )
}