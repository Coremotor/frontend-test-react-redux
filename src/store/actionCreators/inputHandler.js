import {INPUT_HANDLER} from "../actionTypes/inputHandler";

export function inputHandlerNew(event) {
    return {
        type: INPUT_HANDLER,
        inputValue: event.target.value,
        inputId: event.target.id,
    }
}