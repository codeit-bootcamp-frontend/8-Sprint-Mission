import { isEmail, isNotEmpty, hasMinLength } from './validation.js';

(() => {
  let emailInvalid = true;
  let passwordInvalid = true;

  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const showPasswordBtn = document.querySelector('.hide-btn');

  function checkFormButton() {
    const loginBtn = document.querySelector('button[type="submit"]');
    loginBtn.disabled = emailInvalid || passwordInvalid;
  }
  // 로그인 버튼 활성화

  emailInput.addEventListener("change", (e) => {
    const value = e.target.value;
    emailInvalid = !isEmail(value,emailInput) || isNotEmpty(value, emailInput);
    checkFormButton();
  });

  passwordInput.addEventListener("change", (e) => {
    passwordInvalid = hasMinLength(e.target.value, 8, passwordInput);
    checkFormButton();
  });

  showPasswordBtn.addEventListener('click', (e) => {
    if(e.target.classList[1] === undefined) {
      passwordInput.type = 'text';
      showPasswordBtn.classList.add('show');
    } else {
      passwordInput.type = 'password';
      showPasswordBtn.classList.remove('show');
    }
  });
})();
