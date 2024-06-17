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
let passwordValue = '';
let passwordCheckValue = '';

const signUpForm = document.querySelector('.form');
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
  const signUpBtn = document.querySelector('button[type="submit"]');
  const activeLoginBtn =
    emailInvalid &&
    passwordInvalid &&
    checkingPasswordInvalid &&
    nickNameInvalid;
  signUpBtn.disabled = !activeLoginBtn;
}
// 회원가입 버튼 활성화

function validationEmail() {
  const value = emailInput.value;
  emailInvalid = isNotEmpty(value, emailInput, 'emailEmpty');
  if (emailInvalid) {
    emailInvalid = isEmail(value, emailInput, 'emailValid');
  }
  checkFormButton();
}

function validationPassword() {
  const value = passwordInput.value;
  passwordValue = value;
  passwordInvalid = isNotEmpty(value, passwordInput, 'passwordEmpty');
  if (passwordInvalid) {
    passwordInvalid = hasMinLength(value, 8, passwordInput, 'passwordValid');
  }
  if (passwordInvalid) {
    checkingPasswordInvalid = isEqualsPassword(
      passwordValue,
      passwordCheckValue,
      passwordCheckInput,
      'passwordIsNotEquals'
    );
  } else {
    checkingPasswordInvalid = false;
  }
  checkFormButton();
}

emailInput.addEventListener('blur', validationEmail);
// 이메일 검사

nickNameInput.addEventListener('blur', e => {
  const value = e.target.value;
  nickNameInvalid = isNotEmpty(value, nickNameInput, 'nickNameEmpty');

  checkFormButton();
});
// 닉네임 검사

passwordInput.addEventListener('blur', validationPassword);
// 비밀번호 검사

passwordCheckInput.addEventListener('blur', e => {
  const value = e.target.value;
  passwordCheckValue = value;
  checkingPasswordInvalid = isEqualsPassword(
    passwordCheckValue,
    passwordValue,
    passwordCheckInput,
    'passwordIsNotEquals'
  );

  checkFormButton();
});
// 비밀번호 확인

passwordHideBtn.addEventListener('click', () => {
  isPasswordHide(passwordHideBtn, passwordInput);
});

checkPasswordHideBtn.addEventListener('click', () => {
  isPasswordHide(checkPasswordHideBtn, passwordCheckInput);
});

signUpForm.addEventListener('submit', e => {
  e.preventDefault();
  location.href = '../signin.html';
});
