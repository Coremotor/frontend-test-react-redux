import {INPUT_HANDLER} from "../actionTypes/inputHandler";

export function inputHandlerNew(event) {
    return {
        type: INPUT_HANDLER,
        inputId: event.target.id,
        inputValue: event.target.value,
    }
}