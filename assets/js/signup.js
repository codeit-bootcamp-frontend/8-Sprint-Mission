import {
  form,
  email,
  password,
  confirmPassword,
  nickName,
  validateEmail,
  validateNickname,
  validatePassword,
  validateConfirmPassword,
  checkFormValidity,
  submitBtn
} from './form-validation.js';
import { passwordToggleBtns, passwordToggle } from './password-toggle.js';

submitBtn.disabled = true;


email.addEventListener('blur', function () {
  this.parentNode.classList.add('is-valid');
  if (!validateEmail) { this.parentNode.classList.remove('is-valid'); }
});
nickName.addEventListener('blur', function () {
  this.parentNode.classList.add('is-valid');
  validateNickname();
});
password.addEventListener('blur', function () {
  this.parentNode.classList.add('is-valid');
  validatePassword();
});
confirmPassword.addEventListener('blur', function () {
  this.parentNode.classList.add('is-valid');
  validateConfirmPassword();
});

email.addEventListener('keyup', function () {
  if (this.parentNode.classList.contains('is-valid')) {
  }
  validateEmail();
  checkFormValidity();
});
nickName.addEventListener('keyup', function () {
  if (this.parentNode.classList.contains('is-valid')) {
  }
  validateNickname();
  checkFormValidity();
});
password.addEventListener('keyup', function () {
  if (this.parentNode.classList.contains('is-valid')) {
  }
  validatePassword();
  checkFormValidity();
});
confirmPassword.addEventListener('keyup', function () {
  if (this.parentNode.classList.contains('is-valid')) {
  }
  validateConfirmPassword();
  checkFormValidity();
});


form.addEventListener('submit', function (event) {
  if (validateEmail() && validatePassword() && validateConfirmPassword() && validateNickname()) {
    event.preventDefault();
    alert('회원가입성공');
    window.location.href = '/signup.html';
  }
});


// 패스워드 보기
passwordToggleBtns.forEach(btn => {
  btn.addEventListener('click', passwordToggle);
});