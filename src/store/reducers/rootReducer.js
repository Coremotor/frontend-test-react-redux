import initialState from '../initialState';
import {INPUT_HANDLER} from "../actionTypes/inputHandler";
import {verificationFormFields} from "../../libs/verificationFormFields";

function rootReducer(state = initialState, action) {
    console.log('state ' ,state)
    console.log('action ' ,action)
    switch (action.type) {
        case INPUT_HANDLER:
            return [

                {
                    inputId: 1,
                    inputValue: action.inputValue,
                    inputVerificationResult: verificationFormFields(action.inputId, action.inputValue)
                }

            ]


            // state.map((inputField) => {
            //     if (inputField.inputId === action.inputId) {
            //         inputField.inputValue = action.inputValue;
            //         inputField.inputVerificationResult = verificationFormFields(action.id, action.value);
            //         return inputField;
            //     } else {
            //         return inputField;
            //     }
            // });
        default:
            return state;
    }
}

export default rootReducer;
