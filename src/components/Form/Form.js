import React from 'react';
import {InnInputField} from "./InnInputField/InnInputField";
import {UrlInputField} from "./UrlInputField/UrlInputField";
import {EmailInputField} from "./EmailInputField/EmailInputField";
import {PhoneInputField} from "./PhoneInputField/PhoneInputField";
import {ChoiceResidencyBlock} from "./ChoiceResidencyBlock/ChoiceResidencyBlock";
import {SubmitFormBtn} from "./SubmitFormBtn/SubmitFormBtn";
import styles from './Form.module.css';

export default function Form() {

    return (
        <form action="https://echo.htmlacademy.ru/" className={styles.form} method="post" name="form">
            <h1 className={styles.title}>Регистрация</h1>

            <ChoiceResidencyBlock/>
            <InnInputField/>
            <UrlInputField/>
            <EmailInputField/>
            <PhoneInputField/>
            <SubmitFormBtn/>

            <span className={styles.text}>Нажимая на кнопку, вы принимаете&nbsp;
                <a href="http://localhost:3000" className={styles.link}>Правила и условия</a>
            </span>
        </form>
    )
}