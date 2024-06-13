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

const inputPassword = document.getElementById("input-password");
const errorMsgPassword = document.querySelector(".error-message.password");
let flagPassword = 0;
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

const loginBtn = document.querySelector(".form-login-btn");
function checkInputs() {
  if (flagEmail && flagPassword) {
    loginBtn.disabled = false;
    loginBtn.classList.add("enabled");
    loginBtn.addEventListener("click", () => {
      window.location.href = "../items/index.html";
    });
  } else {
    loginBtn.disabled = true;
    loginBtn.classList.remove("enabled");
  }
}
