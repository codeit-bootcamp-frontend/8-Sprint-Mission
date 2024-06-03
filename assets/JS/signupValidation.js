import { isEmail, isNotEmpty, hasMinLength, isEqualsPassword } from './validation.js';

(() => {
  let emailInvalid = true;
  let passwordInvalid = true;
  let checkingPasswordInvalid = true;
  let nickNameInvalid = true;
  let passwordValue;

  const emailInput = document.querySelector('input[type="email"]');
  const nickNameInput = document.querySelector('input[name="nickname"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const passwordCheckInput = document.querySelector(
    'input[name="passwordCheck"]'
  );

  const showPasswordBtn = document.querySelectorAll(".hide-btn");
  const passwordHideBtn = showPasswordBtn[0];
  const checkPasswordHideBtn = showPasswordBtn[1];

  function checkFormButton() {
    const loginBtn = document.querySelector('button[type="submit"]');
    loginBtn.disabled =
      emailInvalid ||
      passwordInvalid ||
      checkingPasswordInvalid ||
      nickNameInvalid;
  }
  // 회원가입 버튼 활성화

  function passwordHide(btn, input) {
    if (btn.classList[1] === undefined) {
      input.type = "text";
      btn.classList.add("show");
    } else {
      input.type = "password";
      btn.classList.remove("show");
    }
  }
  // 패스워드 나타내기

  emailInput.addEventListener("change", (e) => {
    const value = e.target.value;
    emailInvalid = !isEmail(value,emailInput) || isNotEmpty(value, emailInput);
    checkFormButton();
  });

  passwordInput.addEventListener("change", (e) => {
    passwordInvalid = hasMinLength(e.target.value, 8, passwordInput);
    passwordValue = e.target.value;
    checkFormButton();
  });

  nickNameInput.addEventListener("change", (e) => {
    nickNameInvalid = isNotEmpty(e.target.value, nickNameInput);
    checkFormButton();
  });

  passwordCheckInput.addEventListener("change", (e) => {
    const value = e.target.value;
    checkingPasswordInvalid = isEqualsPassword(
      passwordValue,
      value,
      passwordCheckInput
    );
    checkFormButton();
  });

  passwordHideBtn.addEventListener("click", () => {
    passwordHide(passwordHideBtn, passwordInput);
  });

  checkPasswordHideBtn.addEventListener("click", () => {
    passwordHide(checkPasswordHideBtn, passwordCheckInput);
  });
  
})();
