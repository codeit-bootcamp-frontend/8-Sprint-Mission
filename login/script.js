const VALID_EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

const emailInput = document.getElementById("input-email");
const passwordInput = document.getElementById("input-password");

const emailErrorMessage = document.querySelector(".error-message.email");
const passwordErrorMessage = document.querySelector(".error-message.password");

const passwordVisibilityButton = document.querySelector(".password-show-btn");
const passwordVisibilityIcon = document.querySelector(".password-show-icon");
const loginButton = document.querySelector(".form-login-btn");

const handleFocusOutEmailInput = ({ target }) => {
  if (target.value === "") {
    showErrorMessage(target, emailErrorMessage);
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    disableButton(loginButton);
    return;
  }
  if (!VALID_EMAIL_PATTERN.test(target.value)) {
    showErrorMessage(target, emailErrorMessage);
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
    disableButton(loginButton);
    return;
  }
  hideErrorMessage(target, emailErrorMessage);
  checkInputs();
};
emailInput.addEventListener("focusout", handleFocusOutEmailInput);

const handleFocusOutPasswordInput = ({ target }) => {
  if (target.value === "") {
    showErrorMessage(target, passwordErrorMessage);
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    disableButton(loginButton);
    return;
  }
  if (target.value.length < 8) {
    showErrorMessage(target, passwordErrorMessage);
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    disableButton(loginButton);
    return;
  }
  hideErrorMessage(target, passwordErrorMessage);
  checkInputs();
};
passwordInput.addEventListener("focusout", handleFocusOutPasswordInput);

// 버튼 활성화를 위한 input 유효성 검사
const checkInputs = () => {
  const isValid =
    emailInput.getAttribute("data-valid") === "true" &&
    passwordInput.getAttribute("data-valid") === "true";
  if (isValid) {
    activeButton(loginButton);
    return;
  }
  disableButton(loginButton);
};

// 비밀번호 문자열 보이거나 가리기
const handleTogglePasswordVisibilityButton = ({ target }) => {
  const isPasswordVisible =
    passwordVisibilityIcon.getAttribute("data-valid") === "true";
  const inputType = isPasswordVisible ? "password" : "text";
  const iconType = isPasswordVisible ? "off" : "on";

  passwordInput.type = inputType;
  passwordVisibilityIcon.src = `../asset/icon/btn_visibility_${iconType}.png`;
  target.setAttribute("data-valid", `${!isPasswordVisible}`);
};
passwordVisibilityButton.addEventListener(
  "click",
  handleTogglePasswordVisibilityButton
);

import {
  showErrorMessage,
  hideErrorMessage,
  activeButton,
  disableButton,
} from "../auth.js";
