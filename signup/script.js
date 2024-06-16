const inputEmail = document.getElementById("input-email");
const errorMsgEmail = document.querySelector(".error-message.email");
let flagEmail = 0;
inputEmail.addEventListener("focusout", ({ target }) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if (target.value === "") {
    target.classList.add("error");
    errorMsgEmail.style.display = "block";
    flagEmail = 0;
  } else if (!pattern.test(target.value)) {
    target.classList.add("error");
    errorMsgEmail.style.display = "block";
    errorMsgEmail.textContent = "잘못된 이메일 형식입니다.";
    flagEmail = 0;
  } else {
    target.classList.remove("error");
    errorMsgEmail.style.display = "none";
    flagEmail = 1;
  }
  checkInputs();
});

const inputNickname = document.getElementById("input-nickname");
const errorMsgNickname = document.querySelector(".error-message.nickname");
let flagNickname = 0;
inputNickname.addEventListener("focusout", ({ target }) => {
  if (target.value === "") {
    target.classList.add("error");
    errorMsgNickname.style.display = "block";
    flagNickname = 0;
  } else {
    target.classList.remove("error");
    errorMsgNickname.style.display = "none";
    flagNickname = 1;
  }
  checkInputs();
});

const inputPassword = document.getElementById("input-password");
const errorMsgPassword = document.querySelector(".error-message.password");
let flagPassword = 0;
let flagPasswordCheck = 0;
inputPassword.addEventListener("focusout", ({ target }) => {
  if (target.value === "") {
    target.classList.add("error");
    errorMsgPassword.style.display = "block";
    flagPassword = 0;
  } else if (target.value.length < 8) {
    target.classList.add("error");
    errorMsgPassword.style.display = "block";
    errorMsgPassword.textContent = "비밀번호를 8자 이상 입력해주세요.";
    flagPassword = 0;
  } else {
    target.classList.remove("error");
    errorMsgPassword.style.display = "none";
    flagPassword = 1;
  }
  checkInputs();
});

const inputPasswordCheck = document.getElementById("input-password-check");
const errorMsgPasswordCheck = document.querySelector(
  ".error-message.password-check"
);
inputPasswordCheck.addEventListener("focusout", ({ target }) => {
  if (target.value !== inputPassword.value) {
    target.classList.add("error");
    errorMsgPasswordCheck.style.display = "block";
    flagPasswordCheck = 0;
  } else {
    target.classList.remove("error");
    errorMsgPasswordCheck.style.display = "none";
    flagPasswordCheck = 1;
  }
  checkInputs();
});

// 버튼 활성화를 위한 input 유효성 검사
const signupBtn = document.querySelector(".form-signup-btn");
function checkInputs() {
  if (flagEmail && flagNickname && flagPassword && flagPasswordCheck) {
    signupBtn.disabled = false;
    signupBtn.classList.add("enabled");
    signupBtn.addEventListener("click", () => {
      window.location.href = "../signup/index.html";
    });
  } else {
    signupBtn.disabled = true;
    signupBtn.classList.remove("enabled");
  }
}

// 비밀번호 문자열 보이거나 가리기
let flagVisibility_pw = 0; // 0 = 비밀번호 가리기, 1 = 비밀번호 보이기
const pwVisibilityIcon = document.querySelector(".password-show-btn.password");
pwVisibilityIcon.addEventListener("click", () => {
  if (!flagVisibility_pw) {
    inputPassword.type = "text";
    document.querySelector(".password-show-icon.password").src =
      "../asset/icon/btn_visibility_on.png";
    flagVisibility_pw = 1;
  } else {
    inputPassword.type = "password";
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
    inputPasswordCheck.type = "text";
    document.querySelector(".password-show-icon.password-check").src =
      "../asset/icon/btn_visibility_on.png";
    flagVisibility_pwCheck = 1;
  } else {
    inputPasswordCheck.type = "password";
    document.querySelector(".password-show-icon.password-check").src =
      "../asset/icon/btn_visibility_off.png";
    flagVisibility_pwCheck = 0;
  }
});
