import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {inputHandlerNew} from "../../../store/actionCreators/inputHandler";
import doneIcon from "../../../img/done.svg";
import styles from "../Form.module.css";

export const InnInputField = () => {

    const state = useSelector(state => state.find((item) => item.inputId === "innInputField"));
    const dispatch = useDispatch();

    const [placeholder, setPlaceholder] = useState("ИНН организации или ИП");

    console.log('innState', state);

    return (
        <div className={styles["input-wrapper"]}>
            <label className={styles["display-none"]} htmlFor="innInputField">ИНН</label>
            <input id="innInputField"
                   className={styles["input-field"]}
                   type="number"
                   min="10"
                   name="inn"
                   onFocus={() => setPlaceholder("Введите 10 или 12 чисел")}
                   onBlur={() => setPlaceholder("ИНН организации или ИП")}
                   placeholder={placeholder}
                   required
                   value={state.inputValue}
                   onChange={(event) => dispatch(inputHandlerNew(event))}
            />

            <span className={styles["input-verification-result-block"]}>
                {
                    (state.inputValue.length === 0 || state.inputValue.length === 10 || state.inputValue.length === 12)
                        ? null
                        : state.inputValue.length
                }
            </span>

            {
                state.inputVerificationResult &&
                <span className={styles["input-verification-result-block"]}>
                    <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                </span>
            }
        </div>
    )
}