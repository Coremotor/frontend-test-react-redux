import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {inputHandlerNew} from "../../../store/actionCreators/inputHandler";
import doneIcon from "../../../img/done.svg";
import styles from "../Form.module.css";

export const UrlInputField = () => {

    const state = useSelector(state => state.find((item) => item.inputId === "urlInputField"));
    const dispatch = useDispatch();

    const [placeholder, setPlaceholder] = useState("Сайт магазина");

    return (
        <div className={styles["input-wrapper"]}>
            <label className={styles["display-none"]} htmlFor="urlInputField">Сайт</label>
            <input id="urlInputField"
                   className={styles["input-field"]}
                   type="text"
                   name="site"
                   onFocus={() => setPlaceholder("www.example.com")}
                   onBlur={() => setPlaceholder("Сайт магазина")}
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
