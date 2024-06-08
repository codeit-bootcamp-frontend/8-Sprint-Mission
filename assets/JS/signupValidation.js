import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualsPassword,
  isPasswordHide,
} from './validation.js';

let emailInvalid = false;
let passwordInvalid = false;
let checkingPasswordInvalid = false;
let nickNameInvalid = false;
let passwordValue;

const emailInput = document.querySelector('input[type="email"]');
const nickNameInput = document.querySelector('input[name="nickname"]');
const passwordInput = document.querySelector('input[type="password"]');
const passwordCheckInput = document.querySelector(
  'input[name="passwordCheck"]'
);

const showPasswordBtn = document.querySelectorAll('.hide-btn');
const passwordHideBtn = showPasswordBtn[0];
const checkPasswordHideBtn = showPasswordBtn[1];

function checkFormButton() {
  const loginBtn = document.querySelector('button[type="submit"]');
  const activeLoginBtn =
    emailInvalid &&
    passwordInvalid &&
    checkingPasswordInvalid &&
    nickNameInvalid;
  loginBtn.disabled = !activeLoginBtn;
}
// 회원가입 버튼 활성화

emailInput.addEventListener('change', e => {
  const value = e.target.value;
  emailInvalid = !isEmail(value, emailInput) || isNotEmpty(value, emailInput);
  checkFormButton();
});

passwordInput.addEventListener('change', e => {
  passwordInvalid = hasMinLength(e.target.value, 8, passwordInput);
  passwordValue = e.target.value;
  checkFormButton();
});

nickNameInput.addEventListener('change', e => {
  nickNameInvalid = isNotEmpty(e.target.value, nickNameInput);
  checkFormButton();
});

passwordCheckInput.addEventListener('change', e => {
  const value = e.target.value;
  checkingPasswordInvalid = isEqualsPassword(
    passwordValue,
    value,
    passwordCheckInput
  );
  checkFormButton();
});

passwordHideBtn.addEventListener('click', () => {
  isPasswordHide(passwordHideBtn, passwordInput);
});

checkPasswordHideBtn.addEventListener('click', () => {
  isPasswordHide(checkPasswordHideBtn, passwordCheckInput);
});
