import { emailInput, btn } from "./constLib.js";

const emailEmptyMessage = document.querySelector('.email-empty');
const emailWrongFormatMessage = document.querySelector('.email-wrong-format');

function isCorrectEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default function emailValidationCheck(event) {
    
    if( event.target !== emailInput ) return;
    
    emailInput.classList.toggle('errored', !emailInput.value || !isCorrectEmailFormat(emailInput.value));
    emailInput.classList.toggle('correct', emailInput.value && isCorrectEmailFormat(emailInput.value));

    emailEmptyMessage.classList.toggle('hidden', emailInput.value);
    emailWrongFormatMessage.classList.toggle('hidden', !emailInput.value || isCorrectEmailFormat(emailInput.value));

}