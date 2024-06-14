// 필요한 함수들을 export하여 다른 모듈에서 사용할 수 있도록 합니다.
export {
  createErrorMessageElement,
  validateEmail,
  validatePassword,
  togglePasswordVisibility,
};

// 에러 메시지 요소를 생성하여 반환하는 함수입니다.
function createErrorMessageElement() {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  return errorMessage;
}

// 이메일 유효성 검사를 수행하는 함수입니다.
function validateEmail(emailValue, showErrors, emailInput, emailErrorMessage) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;

  // 이메일 값이 비어있는 경우
  if (!emailValue) {
    if (showErrors) {
      emailErrorMessage.textContent = "이메일을 입력해주세요.";
      emailErrorMessage.style.display = "block";
      emailInput.classList.add("input-error");
    }
    isValid = false;
  }
  // 이메일 형식이 잘못된 경우
  else if (!emailRegex.test(emailValue)) {
    if (showErrors) {
      emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
      emailErrorMessage.style.display = "block";
      emailInput.classList.add("input-error");
    }
    isValid = false;
  }
  // 이메일이 유효한 경우
  else {
    emailErrorMessage.textContent = "";
    emailErrorMessage.style.display = "none";
    emailInput.classList.remove("input-error");
  }

  return isValid;
}

// 비밀번호 유효성 검사를 수행하는 함수입니다.
function validatePassword(
  passwordValue,
  showErrors,
  passwordInput,
  passwordErrorMessage
) {
  let isValid = true;

  // 비밀번호 값이 비어있는 경우
  if (!passwordValue) {
    if (showErrors) {
      passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
      passwordErrorMessage.style.display = "block";
      passwordInput.classList.add("input-error");
    }
    isValid = false;
  }
  // 비밀번호 길이가 8자 미만인 경우
  else if (passwordValue.length < 8) {
    if (showErrors) {
      passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordErrorMessage.style.display = "block";
      passwordInput.classList.add("input-error");
    }
    isValid = false;
  }
  // 비밀번호가 유효한 경우
  else {
    passwordErrorMessage.textContent = "";
    passwordErrorMessage.style.display = "none";
    passwordInput.classList.remove("input-error");
  }

  return isValid;
}

// 비밀번호 입력 필드의 표시/숨김을 토글하는 함수입니다.
function togglePasswordVisibility(button) {
  const input = button.previousElementSibling;
  const type = input.getAttribute("type") === "password" ? "text" : "password";
  input.setAttribute("type", type);
  // 아이콘을 변경합니다.
  const icon =
    type === "password"
      ? "images/icons/eye-invisible.svg"
      : "images/icons/eye-visible.svg";
  button.setAttribute("src", icon);
}
