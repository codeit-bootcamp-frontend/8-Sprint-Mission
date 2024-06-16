const emailInput = document.getElementById("input-email");
const emailErrorMessage = document.querySelector(".error-message.email");
let flagEmail = 0;
const VALID_EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
emailInput.addEventListener("focusout", ({ target }) => {
  if (target.value === "") {
    target.classList.add("error");
    emailErrorMessage.style.display = "block";
    flagEmail = 0;
  } else if (!VALID_EMAIL_PATTERN.test(target.value)) {
    target.classList.add("error");
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
    flagEmail = 0;
  } else {
    target.classList.remove("error");
    emailErrorMessage.style.display = "none";
    flagEmail = 1;
  }
  checkInputs();
});

const passwordInput = document.getElementById("input-password");
const passwordErrorMessage = document.querySelector(".error-message.password");
let flagPassword = 0;
passwordInput.addEventListener("focusout", ({ target }) => {
  if (target.value === "") {
    target.classList.add("error");
    passwordErrorMessage.style.display = "block";
    flagPassword = 0;
  } else if (target.value.length < 8) {
    target.classList.add("error");
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    flagPassword = 0;
  } else {
    target.classList.remove("error");
    passwordErrorMessage.style.display = "none";
    flagPassword = 1;
  }
  checkInputs();
});

// 버튼 활성화를 위한 input 유효성 검사
const loginButton = document.querySelector(".form-login-btn");
function checkInputs() {
  if (flagEmail && flagPassword) {
    loginButton.disabled = false;
    loginButton.classList.add("enabled");
    loginButton.addEventListener("click", () => {
      window.location.href = "../items/index.html";
    });
  } else {
    loginButton.disabled = true;
    loginButton.classList.remove("enabled");
  }
}

// 비밀번호 문자열 보이거나 가리기
let flagVisibility = 0; // 0 = 비밀번호 가리기, 1 = 비밀번호 보이기
const pwVisibilityIcon = document.querySelector(".password-show-btn");
pwVisibilityIcon.addEventListener("click", () => {
  if (!flagVisibility) {
    passwordInput.type = "text";
    document.querySelector(".password-show-icon").src =
      "../asset/icon/btn_visibility_on.png";
    flagVisibility = 1;
  } else {
    passwordInput.type = "password";
    document.querySelector(".password-show-icon").src =
      "../asset/icon/btn_visibility_off.png";
    flagVisibility = 0;
  }
});
