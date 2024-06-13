import {
  signupForm,
  email,
  password,
  confirmPassword,
  nickName,
  validateEmail,
  validateNickname,
  validatePassword,
  validateConfirmPassword,
  signUpBtn
} from './form-validation.js';
import { passwordToggleBtns, passwordToggle } from './password-toggle.js';

signUpBtn.disabled = true;

function checkFormValidity() {
  const isValid = [...signupForm.querySelectorAll('input')].every(input => input.dataset.valid === 'true');
  signUpBtn.disabled = !isValid;
}

email.addEventListener('blur', validateEmail);
nickName.addEventListener('blur', validateNickname);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirmPassword);

email.addEventListener('keyup', function () {
  if (this.classList.contains('is-valid')) {
    validateEmail();
  }
  checkFormValidity();
});
nickName.addEventListener('keyup', function () {
  if (this.classList.contains('is-valid')) {
    validateNickname();
  }
  checkFormValidity();
});
password.addEventListener('keyup', function () {
  if (this.classList.contains('is-valid')) {
    validatePassword();
  }
  checkFormValidity();
});
confirmPassword.addEventListener('keyup', function () {
  if (this.classList.contains('is-valid')) {
    validateConfirmPassword();
  }
  checkFormValidity();
});


signupForm.addEventListener('submit', function (event) {
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