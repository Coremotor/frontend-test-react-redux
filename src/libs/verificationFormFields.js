export function verificationFormFields(inputFieldId, inputFieldValue) {
    switch (inputFieldId) {
        case "innInputField": {
            let result = false;
            if (inputFieldValue.length === 10 || inputFieldValue.length === 12) {
                result = true;
            }
            return result;
        }

        case "urlInputField": {
            let re = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
            return re.test(inputFieldValue);
        }

        case "emailInputField": {
            let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(inputFieldValue);
        }

        case "phoneInputField": {
            let re = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
            return re.test(inputFieldValue);
        }

        default: {
            return false;
        }
    }
}