import React from 'react';
import styles from './Form.module.css';
import doneIcon from '../../img/done.svg';

export default function Form({inputHandler, state}) {

    return (
        <form action="https://echo.htmlacademy.ru/" className={styles.form} method="post" name="form">
            <h1 className={styles.title}>Регистрация</h1>

            <div className={styles["buttons-wrapper"]}>
                <button className={[styles.btn, styles["btn-resident"]].join(' ')} type="button">Резидент России
                </button>

                <button className={[styles.btn, styles["btn-non-resident"]].join(' ')} type="button">Нерезидент
                </button>
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="innInputField">ИНН</label>
                <input id="innInputField"
                       className={styles["input-field"]}
                       type="number"
                       min="10"
                       name="inn"
                       onFocus={(event) => inputHandler(event, "Введите 10 или 12 цифр")}
                       onBlur={(event) => inputHandler(event, "ИНН организации или ИП")}
                       placeholder={state.find((item) => item.inputId === "innInputField").inputPlaceholderValue}
                       required
                       value={state.find((item) => item.inputId === "innInputField").inputValue}
                       onChange={inputHandler}
                />

                <span className={styles["input-verification-result-block"]}>
                    {state.find((item) => item.inputId === "innInputField").inputValue.length === 0
                        ? null :
                        state.find((item) => item.inputId === "innInputField").inputValue.length === 10
                            ? null :
                            state.find((item) => item.inputId === "innInputField").inputValue.length === 12
                                ? null :
                                state.find((item) => item.inputId === "innInputField").inputValue.length}
                </span>

                {
                    state.find((item) => item.inputId === "innInputField").inputVerificationResult
                        ?
                        <span className={styles["input-verification-result-block"]}>
                            <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                        </span>
                        : null
                }
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="urlInputField">Сайт</label>
                <input id="urlInputField"
                       className={styles["input-field"]}
                       type="text"
                       name="site"
                       onFocus={(event) => inputHandler(event, "www.example.com")}
                       onBlur={(event) => inputHandler(event, "Сайт магазина")}
                       placeholder={state.find((item) => item.inputId === "urlInputField").inputPlaceholderValue}
                       required
                       value={state.find((item) => item.inputId === "urlInputField").inputValue}
                       onChange={inputHandler}
                />

                {
                    state.find((item) => item.inputId === "urlInputField").inputVerificationResult
                        ?
                        <span className={styles["input-verification-result-block"]}>
                            <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                        </span>
                        : null
                }
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="emailInputField">Почта</label>
                <input id="emailInputField"
                       className={styles["input-field"]}
                       type="email"
                       name="email"
                       onFocus={(event) => inputHandler(event, "example@mail.com")}
                       onBlur={(event) => inputHandler(event, "Электронная почта")}
                       placeholder={state.find((item) => item.inputId === "emailInputField").inputPlaceholderValue}
                       required
                       value={state.find((item) => item.inputId === "emailInputField").inputValue}
                       onChange={inputHandler}
                />

                {
                    state.find((item) => item.inputId === "emailInputField").inputVerificationResult
                        ?
                        <span className={styles["input-verification-result-block"]}>
                            <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                        </span>
                        : null
                }
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="phoneInputField">Номер телефона</label>
                <input id="phoneInputField"
                       className={styles["input-field"]}
                       type="tel"
                       name="tel"
                       onFocus={(event) => inputHandler(event, "+7(999)999-99-99")}
                       onBlur={(event) => inputHandler(event, "Номер телефона")}
                       placeholder={state.find((item) => item.inputId === "phoneInputField").inputPlaceholderValue}
                       required
                       value={state.find((item) => item.inputId === "phoneInputField").inputValue}
                       onChange={inputHandler}
                />

                {
                    state.find((item) => item.inputId === "phoneInputField").inputVerificationResult
                        ?
                        <span className={styles["input-verification-result-block"]}>
                            <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                        </span>
                        : null
                }
            </div>

            <button className={
                state.every(item => item.inputVerificationResult === true)
                    ? styles["btn-submit"]
                    : styles["btn-submit-disabled"]}

                    type="submit"

                    disabled={!state.every(item => item.inputVerificationResult === true)}
            >
                Зарегистрироваться
            </button>

            <span className={styles.text}>Нажимая на кнопку, вы принимаете&nbsp;
                <a href="http://localhost:3000" className={styles.link}>Правила и условия</a>
                </span>
        </form>

    )
}