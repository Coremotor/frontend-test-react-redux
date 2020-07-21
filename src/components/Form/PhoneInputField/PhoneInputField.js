import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {inputHandlerNew} from "../../../store/actionCreators/inputHandler";
import doneIcon from "../../../img/done.svg";
import styles from "../Form.module.css";

export const PhoneInputField = () => {

    const state = useSelector(state => state.find((item) => item.inputId === "phoneInputField"));
    const dispatch = useDispatch();

    const [placeholder, setPlaceholder] = useState("Номер телефона");

    console.log('phoneState', state);

    return (
        <div className={styles["input-wrapper"]}>
            <label className={styles["display-none"]} htmlFor="phoneInputField">Номер телефона</label>
            <input id="phoneInputField"
                   className={styles["input-field"]}
                   type="tel"
                   name="tel"
                   onFocus={() => setPlaceholder("+7(999)999-99-99")}
                   onBlur={() => setPlaceholder("Номер телефона")}
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