// validitiy checker (boolean)
import { emailIsValid, nicknameIsValid, pwIsValid, pwRetypeIsValid } from './input.js';

const loginButton = document.querySelector('#login-button');
const signupButton = document.querySelector('#signup-button');

// every input is valid -> button disable=false
export function buttonDisableChecker(event) {

  if(loginButton !== null) {
    if(emailIsValid && pwIsValid) {
      loginButton.disabled = false;
    } else {
      loginButton.disabled = true;
    }
  }

  if(signupButton !== null) {
    if(emailIsValid && pwIsValid && nicknameIsValid && pwRetypeIsValid) {
      signupButton.disabled = false;
    } else {
      signupButton.disabled = true;
    }
  }
}