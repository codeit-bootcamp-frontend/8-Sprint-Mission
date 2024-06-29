import {
  email,
  checkIsEmailValid,
  password,
  checkIsPasswordValid,
  passwordIcon,
  btn,
  togglePassword,
  validateEmailInputValue,
  validatePasswordValue,
} from "./common.js";

email.addEventListener("focusout", checkIsEmailValid);

password.addEventListener("focusout", checkIsPasswordValid);

passwordIcon.addEventListener("click", togglePassword);

//로그인 버튼 유효성 검사

const activateLoginButtonByValidation = () => {
  const isEmailInputValid = validateEmailInputValue(email.value);
  const isPasswordInputValid = validatePasswordValue(password.value);

  if (isEmailInputValid && isPasswordInputValid) {
    btn.disabled = false;
    btn.style.backgroundColor = "#3692ff";
    btn.addEventListener("click", () => {
      window.location.href = "/items.html";
    });

    return;
  }

  btn.disabled = true;
};

btn.addEventListener("click", activateLoginButtonByValidation);
