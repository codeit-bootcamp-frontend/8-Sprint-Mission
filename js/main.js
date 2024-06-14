import { emailInputCheck,nicknameInputCheck, pwInputCheck, pwRetypeInputCheck } from './input.js';
import { buttonDisableChecker } from './button.js';

const emailInput = document.querySelector('#email-input');
const pwInput = document.querySelector('#password-input');
const pwRetypeInput = document.querySelector('#password-retype-input');
const nicknameInput = document.querySelector('#nickname-input');

// login page event
emailInput.addEventListener('focusout', emailInputCheck);
pwInput.addEventListener('focusout', pwInputCheck);

emailInput.addEventListener('focusout', buttonDisableChecker);
pwInput.addEventListener('focusout', buttonDisableChecker);


// signup page event
if (pwRetypeInput && nicknameInput) {
  nicknameInput.addEventListener('focusout', nicknameInputCheck);
  pwRetypeInput.addEventListener('focusout', pwRetypeInputCheck);

  nicknameInput.addEventListener('focusout', buttonDisableChecker);
  pwRetypeInput.addEventListener('focusout', buttonDisableChecker);
}