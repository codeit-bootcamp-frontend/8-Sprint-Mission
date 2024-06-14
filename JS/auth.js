/** IIFE
 *
 */
// (function () {
//   const sumbitButton = document.querySelector("#login-button");
//   sumbitButton.disabled = true;
// });

const FORM_ELEMENT = document.querySelector("form");

/**
 * focusout이 일어나면 form의 요소들을 변화시킴
 */
FORM_ELEMENT.addEventListener("focusout", (e) => {
  if (e.target.classList.contains("form-input")) {
    validateInput(e.target);
    checkRequiredValues();
  }
});

/**
 * Input 태그를 검사하는 함수
 * @param {HTMLElement} input - focusout이 일어났을 때 검사할 Input
 */
function validateInput(input) {
  const errorMessageElement =
    input.parentElement.querySelector(".form-input-errmsg");
  let isValid = false; // boolean (input 태그가 유효한지 검증하는 변수)
  let validMessage = ""; // 에러 메세지

  if (input.value == "" && input.required) {
    validMessage = `${input.dataset.input}을(를) 입력해주세요.`;
  } else {
    switch (input.id) {
      case "email":
        isValid = validateEmail(input.value);
        validMessage = isValid ? "" : "잘못된 이메일 형식입니다.";
        break;

      case "password":
        isValid = validatePassword(input.value);
        validMessage = isValid ? "" : "비밀번호를 8자 이상 입력해주세요.";
        break;

      case "password-check":
        const firstPassword = document.querySelector("#password");
        isValid = validatePasswordCheck(firstPassword.value, input.value);
        validMessage = isValid ? "" : "비밀번호가 일치하지 않습니다.";
        break;

      default:
        isValid = true;
    }
  }

  if (!isValid) {
    input.style.border = "1px solid var(--error)";
    if (errorMessageElement) {
      errorMessageElement.textContent = validMessage;
    } else {
      createErrorMessage(input, validMessage);
    }
  } else {
    input.style.border = "";
    errorMessageElement && errorMessageElement.remove();
  }
}

/**
 * 이메일이 정규식에 맞는지 검증하는 함수
 * @param {string} email - 이메일
 * @return {boolean} - 유효하면 true, 그렇지 않으면 false
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * 비밀번호의 길이가 맞는지 확인하는 함수
 * @param {string} password - 확인할 비밀번호
 * @return {boolean} - 유효하면 true, 그렇지 않으면 false
 */
function validatePassword(password) {
  return password.length < 8 ? false : true;
}

/**
 * 비밀번호 확인 input과 비밀번호 input이 같은지 확인하는 함수
 * @param {string} pw1 - 비교할 비밀번호
 * @param {string} pw2 - 비밀번호 확인
 * @return {boolean} - 비밀번호가 같으면 true, 그렇지 않으면 false
 */
function validatePasswordCheck(pw1, pw2) {
  return pw1 === pw2;
}

/**
 * 에러 메시지를 만드는 함수
 * @param {HTMLElement} eventTarget - 에러 메시지가 발생한 input 태그
 * @param {string} errText - 에러 메시지
 */
function createErrorMessage(eventTarget, errText) {
  const newErrorMessage = document.createElement("p");
  newErrorMessage.textContent = `${errText}`;
  newErrorMessage.classList.add("form-input-errmsg");
  eventTarget.parentElement.append(newErrorMessage);
}

/**
 * 모든 Required <input>이 올바르게 입력되었는지 확인하는 함수
 * 모두 올바르면 버튼을 활성화합니다.
 * 그렇지 않으면 버튼을 비활성화합니다.
 */
function checkRequiredValues() {
  const requiredInputElements = document.querySelectorAll(
    ".form-input[required]"
  );
  let allFilled = true;

  // 모든 required input에 대해 조사
  requiredInputElements.forEach((el) => {
    if (el.value == "") {
      allFilled = false;
    }
  });

  const hasError = document.querySelector(".form-input-errmsg");
  const sumbitButton = document.querySelector(".login-button");
  if (allFilled && !hasError) {
    sumbitButton.disabled = false;
  } else {
    sumbitButton.disabled = true;
  }
}
