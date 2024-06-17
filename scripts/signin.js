// validation.js 모듈에서 필요한 함수들을 가져옵니다.
import {
  createErrorMessageElement,
  validateEmail,
  validatePassword,
  togglePasswordVisibility,
} from "./validation.js";

// DOM이 완전히 로드되면 실행되는 함수입니다.
document.addEventListener("DOMContentLoaded", function () {
  // 이메일, 비밀번호 입력 필드 및 폼 요소를 가져옵니다.
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector('button[type="submit"]');
  const form = document.querySelector("form");
  const togglePasswordButton = document.querySelector(".toggle-password");

  const emailErrorMessage = createErrorMessageElement();
  emailInput.parentNode.appendChild(emailErrorMessage);

  // 이메일과 비밀번호 입력 필드 아래에 에러 메시지 요소를 생성하여 추가합니다.
  const passwordErrorMessage = createErrorMessageElement();
  passwordInput.parentNode.parentNode.appendChild(passwordErrorMessage);

  // 입력 필드 유효성 검사를 수행하는 함수입니다.
  function validateInputs(showErrors = false) {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    let isValid = true;

    // 이메일 유효성 검사
    isValid =
      validateEmail(emailValue, showErrors, emailInput, emailErrorMessage) &&
      isValid;

    // 비밀번호 유효성 검사
    isValid =
      validatePassword(
        passwordValue,
        showErrors,
        passwordInput,
        passwordErrorMessage
      ) && isValid;

    // 유효성 검사 결과에 따라 로그인 버튼 활성화/비활성화
    loginButton.disabled = !isValid;
    return isValid;
  }

  // 입력 필드의 포커스 아웃 및 입력 이벤트에 유효성 검사 함수를 추가합니다.
  emailInput.addEventListener("focusout", () => validateInputs(true));
  passwordInput.addEventListener("focusout", () => validateInputs(true));
  emailInput.addEventListener("input", () => validateInputs(false));
  passwordInput.addEventListener("input", () => validateInputs(false));

  // 페이지 로드 시 초기 상태 설정을 위한 유효성 검사 호출
  validateInputs(false);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 동작을 방지합니다.
    if (validateInputs(true)) {
      // 유효성 검사를 통과하면 ../items.html로 이동합니다.
      window.location.href = "../items.html";
    }
  });
  // 비밀번호 표시/숨김 기능을 처리합니다.
  togglePasswordButton.addEventListener("click", function () {
    togglePasswordVisibility(this);
  });
});
