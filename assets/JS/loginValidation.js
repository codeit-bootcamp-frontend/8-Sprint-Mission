import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isPasswordHide,
} from './validation.js';

let emailInvalid = false;
let passwordInvalid = false;

const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const passwordHideBtn = document.querySelector('.hide-btn');

function checkFormButton() {
  const loginBtn = document.querySelector('button[type="submit"]');
  const activeLoginBtn = emailInvalid && passwordInvalid;
  loginBtn.disabled = !activeLoginBtn;
}
// 로그인 버튼 활성화

emailInput.addEventListener('change', e => {
  const value = e.target.value;
  emailInvalid = !isEmail(value, emailInput) || isNotEmpty(value, emailInput);
  checkFormButton();
});

passwordInput.addEventListener('change', e => {
  passwordInvalid = hasMinLength(e.target.value, 8, passwordInput);
  checkFormButton();
});

passwordHideBtn.addEventListener('click', e => {
  isPasswordHide(passwordHideBtn, passwordInput);
});
