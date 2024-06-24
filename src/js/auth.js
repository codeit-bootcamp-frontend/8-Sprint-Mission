const formElement = document.querySelector("form");
const passwordInvisibleElement = document.querySelectorAll("a.password-inv");
const passwordInputElement = document.querySelectorAll(
  "#password, #password-check"
);

// focusout이 일어나면 <input>+<button> 변화 기능
formElement.addEventListener("focusout", (e) => {
  if (e.target.classList.contains("form-input")) {
    validateInput(e.target);
    checkRequiredValues();
  }
});

// input이 일어나면 <button> 변화 기능
formElement.addEventListener("input", (e) => {
  if (e.target.classList.contains("form-input")) {
    updateButtonLive(e.target);
  }
});

// 비밀번호 표시 버튼 기능
passwordInvisibleElement.forEach((el) => {
  el.addEventListener("click", (e) => {
    invisibleInputPassword(e.target, e.target.previousElementSibling);
  });
});

// 비밀번호 입력 제한 기능
passwordInputElement.forEach((el) => {
  el.addEventListener("input", (e) => {
    const pattern = /[^A-Za-z\d@$!%*?&]/g;
    if (pattern.test(e.target.value)) {
      e.target.value = e.target.value.replace(pattern, "");
      alert(
        "숫자, 영소문자, 영대문자, 특수 문자(@$!%*?&)만 입력할 수 있습니다."
      );
    }
  });
});

/* -------------------------------------------------------------- */

/**
 * Input 태그를 검사하는 함수
 * @param {HTMLElement} input - focusout이 일어났을 때 검사할 Input
 */
function validateInput(input) {
  const errorMessageElement =
    input.parentElement.querySelector(".form-input-errmsg");
  let isValid = false; // boolean (input 태그가 유효한지 검증하는 변수)
  let validMessage = ""; // 에러 메세지

  if (input.value.trim === "" && input.required) {
    validMessage = `${input.placeholder}.`;
  } else {
    switch (input.id) {
      case "email":
        isValid = validateEmail(input.value);
        validMessage = isValid ? "" : "잘못된 이메일 형식입니다.";
        break;

      case "nickname":
        isValid = validateNickname(input.value);
        validMessage = isValid ? "" : "닉네임은 한글/영문자/숫자만 가능합니다.";
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

function validateNickname(nickname) {
  const re = /^[가-힣a-zA-Z0-9]+$/;
  return re.test(nickname);
}

/**
 * 비밀번호의 길이가 맞는지 확인하는 함수
 * @param {string} password - 확인할 비밀번호
 * @return {boolean} - 유효하면 true, 그렇지 않으면 false
 */
function validatePassword(password) {
  return password.length >= 8;
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

/* -------------------------------------------------------------- */

/**
 * 입력을 받았을 때, 모든 input의 조건이 만족할 때 버튼을 활성화하는 함수
 * @param {HTMLElement} input - input이 일어났을 때 검사할 Input
 *  */
function updateButtonLive(input) {
  let isValid = false;
  switch (input.id) {
    case "email":
      isValid = validateEmail(input.value);
      break;
    case "nickname":
      isValid = validateNickname(input.value);
      break;
    case "password":
      isValid = validatePassword(input.value);
      break;
    case "password-check":
      const firstPassword = document.querySelector("#password");
      isValid = validatePasswordCheck(firstPassword.value, input.value);
      break;
  }
  if (isValid) {
    checkRequiredValues();
  }
}

/* -------------------------------------------------------------- */

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
  const sumbitButton = document.querySelector(".submit-button");
  if (allFilled && !hasError) {
    sumbitButton.disabled = false;
  } else {
    sumbitButton.disabled = true;
  }
}

/* -------------------------------------------------------------- */

/**
 * 버튼을 누를 경우, 비밀번호 관련 input을 보여주는 함수
 * @param {HTMLElement} eventTarget - 버튼
 * @param {HTMLElement} input - 관련 input
 */
function invisibleInputPassword(eventTarget, input) {
  if (input.type === "password") {
    input.type = "text";
    eventTarget.style.backgroundImage = `url("../assets/login/btn_visibility_on_24px.svg")`;
  } else if (input.type === "text") {
    {
      input.type = "password";
      eventTarget.style.backgroundImage = `url("../assets/login/btn_visibility_off_24px.svg")`;
    }
  }
}
