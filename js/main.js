import { emailInputCheck,nicknameInputCheck, pwInputCheck, pwRetypeInputCheck } from './input.js';
import { buttonDisableChecker } from './button.js';
import { pwVisibleToggle } from './pw_visibility.js';

const emailInput = document.querySelector('#email-input');
const pwInput = document.querySelector('#password-input');
const pwRetypeInput = document.querySelector('#password-retype-input');
const nicknameInput = document.querySelector('#nickname-input');

const pwVisibleBtn = document.querySelector('#password-visibility-button');
const pwRetypeVisibleBtn = document.querySelector('#password-retype-visibility-button');

// login page event
emailInput.addEventListener('focusout', emailInputCheck);
pwInput.addEventListener('focusout', pwInputCheck);

emailInput.addEventListener('focusout', buttonDisableChecker);
pwInput.addEventListener('focusout', buttonDisableChecker);

pwVisibleBtn.addEventListener('click', pwVisibleToggle);


// additional event for signup page
if (pwRetypeInput && nicknameInput) {
  nicknameInput.addEventListener('focusout', nicknameInputCheck);
  pwRetypeInput.addEventListener('focusout', pwRetypeInputCheck);

  nicknameInput.addEventListener('focusout', buttonDisableChecker);
  pwRetypeInput.addEventListener('focusout', buttonDisableChecker);

  pwRetypeVisibleBtn.addEventListener('click', pwVisibleToggle);
}