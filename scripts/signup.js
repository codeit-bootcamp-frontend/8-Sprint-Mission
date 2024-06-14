// validation.js 모듈에서 필요한 함수들을 가져옵니다.
import {
  createErrorMessageElement,
  validateEmail,
  validatePassword,
  togglePasswordVisibility,
} from "./validation.js";

// DOM이 완전히 로드되면 실행되는 함수입니다.
document.addEventListener("DOMContentLoaded", function () {
  // 이메일, 닉네임, 비밀번호, 비밀번호 확인 입력 필드 및 폼 요소를 가져옵니다.
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmationInput = document.getElementById(
    "passwordConfirmation"
  );
  const signupButton = document.querySelector('button[type="submit"]');
  const form = document.querySelector("form");
  const togglePasswordButtons = document.querySelectorAll(".toggle-password");

  // 이메일, 닉네임, 비밀번호 및 비밀번호 확인 입력 필드 아래에 에러 메시지 요소를 생성하여 추가합니다.
  const emailErrorMessage = createErrorMessageElement();
  emailInput.parentNode.appendChild(emailErrorMessage);

  const nicknameErrorMessage = createErrorMessageElement();
  nicknameInput.parentNode.appendChild(nicknameErrorMessage);

  const passwordErrorMessage = createErrorMessageElement();
  passwordInput.parentNode.parentNode.appendChild(passwordErrorMessage);

  const passwordConfirmationErrorMessage = createErrorMessageElement();
  passwordConfirmationInput.parentNode.parentNode.appendChild(
    passwordConfirmationErrorMessage
  );

  // 입력 필드 유효성 검사를 수행하는 함수입니다.
  function validateInputs(showErrors = false) {
    const emailValue = emailInput.value;
    const nicknameValue = nicknameInput.value;
    const passwordValue = passwordInput.value;
    const passwordConfirmationValue = passwordConfirmationInput.value;

    // 이메일 유효성 검사
    let isValid = true;

    isValid =
      validateEmail(emailValue, showErrors, emailInput, emailErrorMessage) &&
      isValid;

    // 닉네임 유효성 검사
    if (!nicknameValue) {
      if (showErrors) {
        nicknameErrorMessage.textContent = "닉네임을 입력해주세요.";
        nicknameErrorMessage.style.display = "block";
        nicknameInput.classList.add("input-error");
      }
      isValid = false;
    } else {
      nicknameErrorMessage.textContent = "";
      nicknameErrorMessage.style.display = "none";
      nicknameInput.classList.remove("input-error");
    }

    // 비밀번호 유효성 검사
    isValid =
      validatePassword(
        passwordValue,
        showErrors,
        passwordInput,
        passwordErrorMessage
      ) && isValid;

    // 비밀번호 확인 유효성 검사
    if (passwordValue !== passwordConfirmationValue) {
      if (showErrors) {
        passwordConfirmationErrorMessage.textContent =
          "비밀번호가 일치하지 않습니다.";
        passwordConfirmationErrorMessage.style.display = "block";
        passwordConfirmationInput.classList.add("input-error");
      }
      isValid = false;
    } else {
      passwordConfirmationErrorMessage.textContent = "";
      passwordConfirmationErrorMessage.style.display = "none";
      passwordConfirmationInput.classList.remove("input-error");
    }

    // 유효성 검사 결과에 따라 회원가입 버튼 활성화/비활성화
    signupButton.disabled = !isValid;
    return isValid;
  }

  // 입력 필드의 포커스 아웃 및 입력 이벤트에 유효성 검사 함수를 추가합니다.
  emailInput.addEventListener("focusout", () => validateInputs(true));
  nicknameInput.addEventListener("focusout", () => validateInputs(true));
  passwordInput.addEventListener("focusout", () => validateInputs(true));
  passwordConfirmationInput.addEventListener("focusout", () =>
    validateInputs(true)
  );
  emailInput.addEventListener("input", () => validateInputs(false));
  nicknameInput.addEventListener("input", () => validateInputs(false));
  passwordInput.addEventListener("input", () => validateInputs(false));
  passwordConfirmationInput.addEventListener("input", () =>
    validateInputs(false)
  );

  // 페이지 로드 시 초기 상태 설정을 위한 유효성 검사 호출
  validateInputs(false);

  // 폼 제출 이벤트를 처리합니다.
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 동작을 방지합니다.
    if (validateInputs(true)) {
      // 유효성 검사를 통과하면 /signin.html로 이동합니다.
      window.location.href = "../signin.html";
    }
  });

  // 비밀번호 표시/숨김 기능을 처리합니다.
  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", function () {
      togglePasswordVisibility(this);
    });
  });
});
