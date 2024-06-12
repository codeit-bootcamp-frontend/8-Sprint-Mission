const inputEmail = document.getElementById("input-email");
const errorMsgEmail = document.querySelector(".error-message.email");
inputEmail.addEventListener("focusout", ({ target }) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if (target.value === "") {
    target.classList.add("error");
    errorMsgEmail.style.display = "block";
  } else if (!pattern.test(target.value)) {
    target.classList.add("error");
    errorMsgEmail.style.display = "block";
    errorMsgEmail.textContent = "잘못된 이메일 형식입니다.";
  } else {
    target.classList.remove("error");
    errorMsgEmail.style.display = "none";
  }
});

const inputPassword = document.getElementById("input-password");
const errorMsgPassword = document.querySelector(".error-message.password");
inputPassword.addEventListener("focusout", ({ target }) => {
  if (target.value === "") {
    target.classList.add("error");
    errorMsgPassword.style.display = "block";
  } else if (target.value.length < 8) {
    target.classList.add("error");
    errorMsgPassword.style.display = "block";
    errorMsgPassword.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else {
    target.classList.remove("error");
    errorMsgPassword.style.display = "none";
  }
});
