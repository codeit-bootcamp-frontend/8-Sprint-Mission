import {
  email,
  input,
  emailCheck,
  password,
  passwordCheck,
  eyeOff,
  eye,
  btn,
} from "./common.js";

email.addEventListener("focusout", emailCheck);

password.addEventListener("focusout", passwordCheck);

eyeOff.addEventListener("click", eye);

//버튼 활성화/비활성화

const VALID_EMAIL_PATTERN =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

//email 값 검사
const validateEmailInputValue = (inputValue) => {
  if (inputValue === "") return false;
  if (!VALID_EMAIL_PATTERN.test(inputValue)) return false;

  return true;
};

const validatePasswordValue = (inputValue) => {
  return inputValue.length >= 8;
};

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
