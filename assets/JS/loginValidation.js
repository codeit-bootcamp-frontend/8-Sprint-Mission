import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isPasswordHide,
} from './validation.js';

let emailInvalid = false;
let passwordInvalid = false;

const loginForm = document.querySelector('.form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const passwordHideBtn = document.querySelector('.hide-btn');

function checkFormButton() {
  const loginBtn = document.querySelector('button[type="submit"]');
  const activeLoginBtn = emailInvalid && passwordInvalid;
  loginBtn.disabled = !activeLoginBtn;
}
// 로그인 버튼 활성화

function validationEmail() {
  const value = emailInput.value;
  emailInvalid = isNotEmpty(value, emailInput, 'emailEmpty');

  if (emailInvalid) {
    emailInvalid = isEmail(value, emailInput, 'emailValid');
  }

  checkFormButton();
}
// 이메일 검사

function validationPassword() {
  const value = passwordInput.value;
  passwordInvalid = isNotEmpty(value, passwordInput, 'passwordEmpty');

  if (passwordInvalid) {
    passwordInvalid = hasMinLength(value, 8, passwordInput, 'passwordValid');
  }
  checkFormButton();
}
// 비밀번호 검사

emailInput.addEventListener('blur', validationEmail);
passwordInput.addEventListener('blur', validationPassword);

passwordHideBtn.addEventListener('click', e => {
  isPasswordHide(passwordHideBtn, passwordInput);
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  location.href = '../items.html';
});
