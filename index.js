// 비밀번호 눈모양 바꾸기
function blink1() {
  const button = document.getElementById("password-icon");
  const img = button.querySelector("img");
  const pwdInput = document.getElementById("signup-password");
  const pwdType = pwdInput.getAttribute("type");
  if (img.getAttribute("src").match("PropertyVariant")) {
    img.setAttribute("src", "/image/icon/PropertyDefault.png");
  } else {
    img.setAttribute("src", "/image/icon/PropertyVariant.png");
  }

  if (pwdType === "password") {
    pwdInput.setAttribute("type", "text");
  } else {
    pwdInput.setAttribute("type", "password");
  }
}

// 비밀번호 확인 눈모양 바꾸기.
function blink2() {
  const button = document.getElementById("repassword-icon");
  const img = button.querySelector("img");
  const pwdInput = document.getElementById("signup-repassword");
  const pwdType = pwdInput.getAttribute("type");
  if (img.getAttribute("src").match("PropertyVariant")) {
    img.setAttribute("src", "/image/icon/PropertyDefault.png");
  } else {
    img.setAttribute("src", "/image/icon/PropertyVariant.png");
  }

  if (pwdType === "password") {
    pwdInput.setAttribute("type", "text");
  } else if (pwdType === "text") {
    pwdInput.setAttribute("type", "password");
  }
}

// 이메일 input 테두리 변경
function line1() {
  const emailInput = document.getElementById("signup-email");
  const errorMessage = document.getElementById("email-error");

  const emailPattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const emailValue = emailInput.value;

  if (!emailPattern.test(emailValue)) {
    errorMessage.textContent = "잘못된 이메일 형식입니다";
    errorMessage.style.display = "block";
    emailInput.classList.add("input-error");
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    emailInput.classList.remove("input-error");
  }
  validateForm();
}
document.getElementById("signup-email").addEventListener("input", line1);

// 이메일 focus out 될때 빈값이면 입력하라고 하기
function handleEmailBlur() {
  const emailInput = document.getElementById("signup-email");
  const errorMessage = document.getElementById("email-error");

  if (emailInput.value.trim() === "") {
    errorMessage.textContent = "이메일을 입력해주세요.";
    errorMessage.style.display = "block";
    emailInput.classList.add("input-error");
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    emailInput.classList.remove("input-error");
  }
  validateForm();
}
document
  .getElementById("signup-email")
  .addEventListener("blur", handleEmailBlur);

// 닉네임
function line2() {
  const nameInput = document.getElementById("signup-name");
  const errorMessage = document.getElementById("name-error");

  if (nameInput.value.trim() === "") {
    errorMessage.textContent = "닉네임을 입력해주세요.";
    errorMessage.style.display = "block";
    nameInput.classList.add("input-error");
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    nameInput.classList.remove("input-error");
  }
  validateForm();
}
document.getElementById("signup-name").addEventListener("blur", line2);

// 비밀번호 테두리 변경, 에러 메세지
function line3() {
  const passwordInput = document.getElementById("signup-password");
  const errorMessage = document.getElementById("password-error");
  const passwordValue = passwordInput.value;

  if (passwordValue.length < 8) {
    errorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
    errorMessage.style.display = "block";
    passwordInput.classList.add("input-error");
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    passwordInput.classList.remove("input-error");
  }
  validateForm();
}
document.getElementById("signup-password").addEventListener("input", line3);

// 비밀번호 확인 테두리 변경, 에러메세지
function line4() {
  const repasswordInput = document.getElementById("signup-repassword");
  const errorMessage = document.getElementById("repassword-error");
  const repasswordValue = repasswordInput.value;
  const passwordInput = document.getElementById("signup-password");
  const passwordValue = passwordInput.value;

  if (repasswordValue !== passwordValue) {
    errorMessage.textContent = "비밀번호가 일치하지 않습니다.";
    errorMessage.style.display = "block";
    repasswordInput.classList.add("input-error");
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    repasswordInput.classList.remove("input-error");
  }
  validateForm();
}
document.getElementById("signup-repassword").addEventListener("input", line4);

// 비밀번호 focus out 될때 빈값이면 입력하라고 하기
function handlPasswordBlur() {
  const passwordInput = document.getElementById("signup-password");
  const errorMessage = document.getElementById("password-error");

  if (passwordInput.value.trim() === "") {
    errorMessage.textContent = "비밀번호를 입력해주세요.";
    errorMessage.style.display = "block";
    passwordInput.classList.add("input-error");
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    passwordInput.classList.remove("input-error");
  }
  validateForm();
}
document
  .getElementById("signup-password")
  .addEventListener("blur", handlPasswordBlur);

// 로그인 유효성 검사
function validateForm() {
  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");
  const loginButton = document.querySelector(".login");

  const emailError =
    document.getElementById("email-error").style.display === "block";
  const passwordError =
    document.getElementById("password-error").style.display === "block";

  if (
    emailInput.value.trim() !== "" &&
    !emailError &&
    passwordInput.value.length >= 8 &&
    !passwordError
  ) {
    loginButton.disabled = false;
    loginButton.classList.remove("disabled");
  } else {
    loginButton.disabled = true;
    loginButton.classList.add("disabled");
  }
}
