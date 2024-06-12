import { passwordInput } from "./constLib.js";

const passwordEmptyMessage = document.querySelector('.password-empty');
const passwordWrongFormatMessage = document.querySelector('.password-wrong-format');

const isLongEnough = (str) => str.length >= 8;

export default function passwordFormatCheck(event) {
    
    if (event.target !== passwordInput) return;
    
    passwordInput.classList.toggle('errored', !passwordInput.value || !isLongEnough(passwordInput.value));

    passwordEmptyMessage.classList.toggle('hidden', passwordInput.value);
    passwordWrongFormatMessage.classList.toggle('hidden', !passwordInput.value || isLongEnough(passwordInput.value));

}