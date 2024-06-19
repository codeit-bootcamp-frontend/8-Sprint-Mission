import {
  email,
  checkIsEmailValid,
  password,
  checkIsPasswordValid,
  passwordIcon,
  togglePasswordVisibility,
  btn,
  togglePassword,
  validateEmailInputValue,
  validatePasswordValue,
} from "./common.js";

email.addEventListener("focusout", checkIsEmailValid);

password.addEventListener("focusout", checkIsPasswordValid);

//비밀번호 가리기/보이기
const passwordRepeatIcon = document.querySelector(".repeat-eye-off");

const togglePasswordRepeat = () => {
  togglePasswordVisibility(passwordRepeat, passwordRepeatIcon);
};

passwordIcon.addEventListener("click", togglePassword);

passwordRepeatIcon.addEventListener("click", togglePasswordRepeat);

//닉네임 검사
const validateNicknameValue = (inputValue) => {
  if (inputValue === "") return false;

  return true;
};

//닉네임 체크
const nickname = document.querySelector("#nickname");

const checkIsNicknameValid = () => {
  const emptyNicknameMessage = document.querySelector(".nickname-none");

  //닉네임 유효성 확인
  const isNicknameValueValid = validateNicknameValue(nickname.value);

  if (isNicknameValueValid) {
    emptyNicknameMessage.classList.add("hide");
    nickname.style.border = "none";
    return;
  }
  emptyNicknameMessage.classList.remove("hide");
  nickname.style.border = "0.1rem solid red";
};

nickname.addEventListener("focusout", checkIsNicknameValid);

//비밀번호 확인 검사
const validatePwRepeatValue = (inputValue) => {
  if (inputValue !== password.value) return false;

  return true;
};

//비밀번호 확인 체크
const passwordRepeat = document.querySelector("#password-repeat");

const checkIsPwRepeatValid = () => {
  const emptyPwRepeatMessage = document.querySelector(".pwrepeat-none");

  //비밀번호 확인 유효성 확인
  const isPwRepeatValueValid = validatePwRepeatValue(passwordRepeat.value);

  if (isPwRepeatValueValid) {
    emptyPwRepeatMessage.classList.add("hide");
    passwordRepeat.style.border = "none";
    return;
  }
  emptyPwRepeatMessage.classList.remove("hide");
  passwordRepeat.style.border = "0.1rem solid red";
};

passwordRepeat.addEventListener("input", checkIsPwRepeatValid);

//회원가입 버튼 활성화/비활성화
const activateSignupButtonByValidation = () => {
  const isEmailInputValid = validateEmailInputValue(email.value);
  const isPasswordInputValid = validatePasswordValue(password.value);
  const isNicknameInputValid = validateNicknameValue(nickname.value);
  const isPwRepeatInputValid = validatePwRepeatValue(passwordRepeat.value);

  if (
    isEmailInputValid &&
    isPasswordInputValid &&
    isNicknameInputValid &&
    isPwRepeatInputValid
  ) {
    btn.disabled = false;
    btn.style.backgroundColor = "#3692ff";
    btn.addEventListener("click", () => {
      window.location.href = "/signin.html";
    });

    return;
  }

  btn.disabled = true;
};

btn.addEventListener("click", activateSignupButtonByValidation);
