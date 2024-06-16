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

const nicknameInput = document.getElementById("input-nickname");
const nicknameErrorMessage = document.querySelector(".error-message.nickname");
let flagNickname = 0;
nicknameInput.addEventListener("focusout", ({ target }) => {
  if (target.value === "") {
    target.classList.add("error");
    nicknameErrorMessage.style.display = "block";
    flagNickname = 0;
  } else {
    target.classList.remove("error");
    nicknameErrorMessage.style.display = "none";
    flagNickname = 1;
  }
  checkInputs();
});

const passwordInput = document.getElementById("input-password");
const passwordErrorMessage = document.querySelector(".error-message.password");
let flagPassword = 0;
let flagPasswordCheck = 0;
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

const passwordCheckInput = document.getElementById("input-password-check");
const passwordCheckErrorMessage = document.querySelector(
  ".error-message.password-check"
);
passwordCheckInput.addEventListener("focusout", ({ target }) => {
  if (target.value !== passwordInput.value) {
    target.classList.add("error");
    passwordCheckErrorMessage.style.display = "block";
    flagPasswordCheck = 0;
  } else {
    target.classList.remove("error");
    passwordCheckErrorMessage.style.display = "none";
    flagPasswordCheck = 1;
  }
  checkInputs();
});

// 버튼 활성화를 위한 input 유효성 검사
const signupButton = document.querySelector(".form-signup-btn");
function checkInputs() {
  if (flagEmail && flagNickname && flagPassword && flagPasswordCheck) {
    signupButton.disabled = false;
    signupButton.classList.add("enabled");
    signupButton.addEventListener("click", () => {
      window.location.href = "../signup/index.html";
    });
  } else {
    signupButton.disabled = true;
    signupButton.classList.remove("enabled");
  }
}

// 비밀번호 문자열 보이거나 가리기
let flagVisibility_pw = 0; // 0 = 비밀번호 가리기, 1 = 비밀번호 보이기
const pwVisibilityIcon = document.querySelector(".password-show-btn.password");
pwVisibilityIcon.addEventListener("click", () => {
  if (!flagVisibility_pw) {
    passwordInput.type = "text";
    document.querySelector(".password-show-icon.password").src =
      "../asset/icon/btn_visibility_on.png";
    flagVisibility_pw = 1;
  } else {
    passwordInput.type = "password";
    document.querySelector(".password-show-icon.password").src =
      "../asset/icon/btn_visibility_off.png";
    flagVisibility_pw = 0;
  }
});

let flagVisibility_pwCheck = 0; // 0 = 비밀번호 가리기, 1 = 비밀번호 보이기
const pwCheckVisibilityIcon = document.querySelector(
  ".password-show-btn.password-check"
);
pwCheckVisibilityIcon.addEventListener("click", () => {
  if (!flagVisibility_pwCheck) {
    passwordCheckInput.type = "text";
    document.querySelector(".password-show-icon.password-check").src =
      "../asset/icon/btn_visibility_on.png";
    flagVisibility_pwCheck = 1;
  } else {
    passwordCheckInput.type = "password";
    document.querySelector(".password-show-icon.password-check").src =
      "../asset/icon/btn_visibility_off.png";
    flagVisibility_pwCheck = 0;
  }
});
