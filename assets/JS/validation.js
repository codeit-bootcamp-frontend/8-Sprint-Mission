import { ERROR_MESSAGE } from './errorMessage.js';

function printErrMessage(isValid, inputElement, type) {
  const existingErrMsg = inputElement.nextElementSibling;

  if (existingErrMsg && existingErrMsg.classList.contains('error-msg')) {
    existingErrMsg.remove();
  }

  const findType = ERROR_MESSAGE.find(msg => msg.type === type);
  const errorMessage = findType ? findType.message : null;
  const createErrMsgEl = document.createElement('p');

  if (!isValid) {
    inputElement.classList.add('error');
    createErrMsgEl.classList.add('error-msg');
    createErrMsgEl.textContent = errorMessage;
    inputElement.insertAdjacentElement('afterend', createErrMsgEl);
  } else {
    inputElement.classList.remove('error');
  }
}
// 에러메세지 출력

export function isEmail(value, inputElement, type) {
  let isValid = false;
  let email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  isValid = email_regex.test(value);
  const errorType = isValid ? '' : type;
  printErrMessage(isValid, inputElement, errorType);
  return isValid;
}
// 이메일 검사

export function isNotEmpty(value, inputElement, type) {
  const isValid = value.trim() !== '';
  const errorType = isValid ? '' : type;
  printErrMessage(isValid, inputElement, errorType);
  return isValid;
}
// 이메일,닉네임 검사

export function hasMinLength(value, minLength, inputElement, type) {
  const isValid = value.length >= minLength;
  const errorType = isValid ? '' : type;
  printErrMessage(isValid, inputElement, errorType);
  return isValid;
}
// 최소 비밀번호 검사

export function isEqualsPassword(value, otherValue, inputElement, type) {
  const isValid = value === otherValue;
  const errorType = isValid ? '' : type;
  printErrMessage(isValid, inputElement, errorType);
  return isValid;
}
// 비밀번호 일치 검사

export function isPasswordHide(btn, input) {
  const isPasswordVisible = input.type === 'password';
  input.type = isPasswordVisible ? 'text' : 'password';
  btn.classList.toggle('show', isPasswordVisible);
}
// 비밀번호 보이기 활성화 버튼
