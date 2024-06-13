import {
  loginForm,
  email,
  password,
  validateEmail,
  validatePassword,
  loginBtn
} from './form-validation.js';
import { passwordToggleBtns, passwordToggle } from './password-toggle.js';

loginBtn.disabled = true;

function checkFormValidity() {
  const isValid = [...loginForm.querySelectorAll('input')].every(input => input.dataset.valid === 'true');
  loginBtn.disabled = !isValid;
}

email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);

email.addEventListener('keyup', function () {
  if (this.classList.contains('is-valid')) {
    validateEmail();
  }
  checkFormValidity();
});
password.addEventListener('keyup', function () {
  if (this.classList.contains('is-valid')) {
    validatePassword();
  }
  checkFormValidity();
});

loginForm.addEventListener('submit', function (event) {
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