import initialState from '../initialState';
import {INPUT_HANDLER} from "../actionTypes/inputHandler";
import {verificationFormFields} from "../../libs/verificationFormFields";

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_HANDLER:
            return [...state].map((inputField) => {
                if (inputField.inputId === action.inputId) {
                    return {
                        ...inputField,
                        inputValue: action.inputValue,
                        inputVerificationResult: verificationFormFields(action.inputId, action.inputValue),
                    };
                } else {
                    return inputField;
                }
            });
        default:
            return state;
    }
}

export default rootReducer;
