export {
  email,
  input,
  checkIsEmailValid,
  password,
  checkIsPasswordValid,
  passwordIcon,
  togglePasswordVisibility,
  btn,
  togglePassword,
  validateEmailInputValue,
  validatePasswordValue,
};

const email = document.querySelector("#email");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const VALID_EMAIL_PATTERN =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

//email 값 검사
const validateEmailInputValue = (inputValue) => {
  if (inputValue === "") return false;
  if (!VALID_EMAIL_PATTERN.test(inputValue)) return false;

  return true;
};

//비밀번호 검사
const validatePasswordValue = (inputValue) => {
  return inputValue.length >= 8;
};

//이메일 체크
const checkIsEmailValid = () => {
  const emptyEmailMessage = document.querySelector(".email-none");
  const invalidEmailMessage = document.querySelector(".email-fail");

  // 이메일 유효성 확인
  const isEmailValueValid = validateEmailInputValue(email.value);

  // 이메일이 유효한 경우
  if (isEmailValueValid) {
    emptyEmailMessage.classList.add("hide");
    invalidEmailMessage.classList.add("hide");
    email.style.border = "none";
    return; // --> 함수 종료
  }
  if (email.value === "") {
    emptyEmailMessage.classList.remove("hide");
    invalidEmailMessage.classList.add("hide");
    email.style.border = "0.1rem solid red";
    return;
  }
  invalidEmailMessage.classList.remove("hide");
  emptyEmailMessage.classList.add("hide");
  email.style.border = "0.1rem solid red";
};

email.addEventListener("focusout", checkIsEmailValid);

//비밀번호 체크
const password = document.querySelector("#password");

const checkIsPasswordValid = () => {
  const emptyPasswordMessage = document.querySelector(".password-none");
  const invalidPasswordMessage = document.querySelector(".password-fail");

  //비밀번호 유효성 확인
  const isPasswordValueValid = validatePasswordValue(password.value);

  if (isPasswordValueValid) {
    invalidPasswordMessage.classList.add("hide");
    emptyPasswordMessage.classList.add("hide");
    password.style.border = "none";
    return;
  }
  if (password.value === "") {
    emptyPasswordMessage.classList.remove("hide");
    invalidPasswordMessage.classList.add("hide");
    password.style.border = "0.1rem solid red";
    return;
  }
  invalidPasswordMessage.classList.remove("hide");
  emptyPasswordMessage.classList.add("hide");
  password.style.border = "0.1rem solid red";
};

password.addEventListener("focusout", checkIsPasswordValid);

//비밀번호 가리기/보이기
const passwordIcon = document.querySelector(".eye-off");

const togglePasswordVisibility = (targetPasswordInput, targetPasswordIcon) => {
  const imageSrc =
    targetPasswordInput.type === "password"
      ? "/image/eye.svg"
      : "/image/eye-off.svg";
  const inputType =
    targetPasswordInput.type === "password" ? "text" : "password";

  targetPasswordIcon.setAttribute("src", imageSrc);
  targetPasswordInput.setAttribute("type", inputType);
};

const togglePassword = () => {
  togglePasswordVisibility(password, passwordIcon);
};

passwordIcon.addEventListener("click", togglePassword);
