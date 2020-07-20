import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import styles from './App.module.css'

import {verificationFormFields} from './libs/verificationFormFields';

import { useSelector } from 'react-redux';

export default function App() {

    const [state, setState] = useState(
        [
            {
                inputId: 'innInputField',
                inputValue: '',
                inputVerificationResult: false,
                inputPlaceholderValue: "ИНН организации или ИП",
            },
            {
                inputId: 'urlInputField',
                inputValue: '',
                inputVerificationResult: false,
                inputPlaceholderValue: "Сайт магазина",
            },
            {
                inputId: 'emailInputField',
                inputValue: '',
                inputVerificationResult: false,
                inputPlaceholderValue: "Электронная почта",
            },
            {
                inputId: 'phoneInputField',
                inputValue: '',
                inputVerificationResult: false,
                inputPlaceholderValue: "Номер телефона",
            },
        ]
    );

    const inputHandler = (event, inputPlaceholderValue) => {
        const newState = state.map((inputField) => {
            if (event.target.id === inputField.inputId) {
                inputField.inputValue = event.target.value;
                inputField.inputVerificationResult = verificationFormFields(event.target.id, event.target.value);
                inputField.inputPlaceholderValue = inputPlaceholderValue;
                return inputField;
            } else {
                return inputField;
            }
        });
        setState(newState);
    }

    const inputFields = useSelector(state => state);
    console.log(inputFields);

    return (
        <div className={styles.container}>
            <Header/>

            <main>
                <Form verificationFormFields={verificationFormFields} inputHandler={inputHandler} state={state}/>
                <Navigation/>
            </main>

            <Footer/>
        </div>
    )
}