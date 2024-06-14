export {
  createErrorMessageElement,
  validateEmail,
  validatePassword,
  togglePasswordVisibility,
};

function createErrorMessageElement() {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  return errorMessage;
}

function validateEmail(emailValue, showErrors, emailInput, emailErrorMessage) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;

  if (!emailValue) {
    if (showErrors) {
      emailErrorMessage.textContent = "이메일을 입력해주세요.";
      emailErrorMessage.style.display = "block";
      emailInput.classList.add("input-error");
    }
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    if (showErrors) {
      emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
      emailErrorMessage.style.display = "block";
      emailInput.classList.add("input-error");
    }
    isValid = false;
  } else {
    emailErrorMessage.textContent = "";
    emailErrorMessage.style.display = "none";
    emailInput.classList.remove("input-error");
  }

  return isValid;
}

function validatePassword(
  passwordValue,
  showErrors,
  passwordInput,
  passwordErrorMessage
) {
  let isValid = true;

  if (!passwordValue) {
    if (showErrors) {
      passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
      passwordErrorMessage.style.display = "block";
      passwordInput.classList.add("input-error");
    }
    isValid = false;
  } else if (passwordValue.length < 8) {
    if (showErrors) {
      passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordErrorMessage.style.display = "block";
      passwordInput.classList.add("input-error");
    }
    isValid = false;
  } else {
    passwordErrorMessage.textContent = "";
    passwordErrorMessage.style.display = "none";
    passwordInput.classList.remove("input-error");
  }

  return isValid;
}

function togglePasswordVisibility(button) {
  const input = button.previousElementSibling;
  const type = input.getAttribute("type") === "password" ? "text" : "password";
  input.setAttribute("type", type);
  const icon =
    type === "password"
      ? "images/icons/eye-invisible.svg"
      : "images/icons/eye-visible.svg";
  button.setAttribute("src", icon);
}
