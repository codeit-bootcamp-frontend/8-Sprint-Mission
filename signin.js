// Sprint Mission 4 기본 요구사항:
// - 이메일 input에서 focus out 할 때, 
// 값이 없을 경우 input에 빨강색 테두리와 아래에 
// “이메일을 입력해주세요.” 빨강색 에러 메세지를 보입니다.
// - 이메일 input에서 focus out 할 때, 
// 이메일 형식에 맞지 않는 경우 input에 빨강색 테두리와 아래에 
// “잘못된 이메일 형식입니다” 빨강색 에러 메세지를 보입니다.

const inputEmail = document.getElementById("email");
const errorMsgEmail = document.querySelector(".error-message-email");
let flagEmail = 0;
inputEmail.addEventListener("focusout", () => {
  if (inputEmail.value === "") {
    inputEmail.classList.add("error");
    errorMsgEmail.style.display = "block";
    flagEmail = 0;
  } else if (!inputEmail.value.includes('@')) {
    inputEmail.classList.add("error");
    errorMsgEmail.style.display = "block";
    errorMsgEmail.innerHTML = "잘못된 이메일 형식입니다.";
    flagEmail = 0;
  } else {
    inputEmail.classList.remove("error");
    errorMsgEmail.style.display = "none";
    flagEmail = 1;
  }
  checkInputs();
});

// - 비밀번호 input에서 focus out 할 때, 
// 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지를 보입니다.
// - 비밀번호 input에서 focus out 할 때, 
// 값이 8자 미만일 경우 아래에 “비밀번호를 8자 이상 입력해주세요.” 에러 메세지를 보입니다.

const inputPassword = document.getElementById("password");
const errorMsgPassword = document.querySelector(".error-message-password");
let flagPassword = 0;
inputPassword.addEventListener("focusout", () => {
  if (inputPassword.value === "") {
    inputPassword.classList.add("error");
    errorMsgPassword.style.display = "block";
    flagPassword = 0;
  } else if (inputPassword.value.length < 8) {
    inputPassword.classList.add("error");
    errorMsgPassword.style.display = "block";
    errorMsgPassword.inner = "비밀번호를 8자 이상 입력해주세요.";
    flagPassword = 0;
  } else {
    inputPassword.classList.remove("error");
    errorMsgPassword.style.display = "none";
    flagPassword = 1;
  }
  checkInputs();
});

// - input 에 빈 값이 있거나 에러 메세지가 있으면  
// ‘로그인’ 버튼은 비활성화 됩니다.
// - Input 에 유효한 값을 입력하면  ‘로그인' 버튼이 활성화 됩니다.
// - 활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다

const loginBtn = document.querySelector(".button.pill-button.full-width");
function checkInputs() {
  if (flagEmail && flagPassword) {
    loginBtn.disabled = false;
    loginBtn.classList.add("enabled");
    loginBtn.addEventListener("click", () => {
      window.location.href = "items.html";
    });
  } else {
    loginBtn.disabled = true;
    loginBtn.classList.remove("enabled");
  }
}