const FORM_GROUP = document.querySelector(".form-group");

/**
 * 알고리즘:
 * focusout 이벤트가 발생하면 두 가지를 체크:
 *
 * 1. 값이 비었는가?
 *    - 값이 비었으면 에러 메시지 및 테두리를 표시
 *    - 값이 있으면 2단계로 이동
 * 2. 값이 있으면: 이메일 형식에 맞는가?
 *    - 형식에 맞으면 에러 메시지 제거 및 테두리 제거
 *    - 형식에 맞지 않으면 에러 메시지를 표시
 */
FORM_GROUP.addEventListener("focusout", (e) => {
  if (e.target.classList.contains("form-input")) {
    const errorMessage =
      e.target.parentElement.querySelector(".form-input-errmsg");

    if (e.target.value == "") {
      e.target.style.border = "1px solid var(--error)";
      errorMessage
        ? (errorMessage.textContent = "이메일을 입력해주세요.")
        : createErrorMessage(e.target, "이메일을 입력해주세요.");
    } else if (validateEmail(e.target.value)) {
      errorMessage && errorMessage.remove();
      e.target.style.border = "";
    } else {
      errorMessage
        ? (errorMessage.textContent = "잘못된 이메일 형식입니다.")
        : createErrorMessage(e.target, "잘못된 이메일 형식입니다.");
    }
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
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
