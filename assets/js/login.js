import {
  form,
  email,
  password,
  validateEmail,
  validatePassword,
  checkFormValidity,
  submitBtn
} from './form-validation.js';
import { passwordToggleBtns, passwordToggle } from './password-toggle.js';

submitBtn.disabled = true;

email.addEventListener('blur', function () {
  this.parentNode.classList.add('is-valid');
  if (!validateEmail) { this.parentNode.classList.remove('is-valid'); }
});
password.addEventListener('blur', function () {
  this.parentNode.classList.add('is-valid');
  validatePassword();
});

email.addEventListener('keyup', function () {
  if (this.parentNode.classList.contains('is-valid')) {
  }
  validateEmail();
  checkFormValidity();
});
password.addEventListener('keyup', function () {
  if (this.parentNode.classList.contains('is-valid')) {
  }
  validatePassword();
  checkFormValidity();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateEmail() && validatePassword()) {
    alert('로그인성공');
    window.location.href = '/items.html';
  }
});


// 패스워드 보기
passwordToggleBtns.forEach(btn => {
  btn.addEventListener('click', passwordToggle);
});