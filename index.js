// 비밀번호 눈모양 바꾸기
function blink() {
  var button = document.getElementById("password-icon");
  var img = button.querySelector("img");
  var pwdInput = document.getElementById("signup-password");
  var pwdType = pwdInput.getAttribute("type");
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


// input 테두리 변경
function line1() {
  var emailInput = document.getElementById("signup-email");
  var errorMessage = document.getElementById("email-error");

  var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  
  var emailValue = emailInput.value;

    if(!emailPattern.test(emailValue)){
      errorMessage.textContent = "잘못된 이메일 형식입니다";
      errorMessage.style.display = "block";
      emailInput.classList.add("input-error");
    } else{
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      emailInput.classList.remove("input-error");
    }
  validateForm();
}
document.getElementById('signup-email').addEventListener('input', line1);

// focus out 될때 빈값이면 입력하라고 하기
function handleEmailBlur() {
  var emailInput = document.getElementById("signup-email");
  var errorMessage = document.getElementById("email-error");

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
document.getElementById("signup-email").addEventListener("blur", handleEmailBlur);


// 비밀번호 테두리 변경
function line2() {
  var passwordInput = document.getElementById("signup-password");
  var errorMessage = document.getElementById("password-error");
  var passwordValue = passwordInput.value;
  
  if (passwordValue.length <8) {
    errorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
    errorMessage.style.display = "block";
    passwordInput.classList.add("input-error");
  }else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    passwordInput.classList.remove("input-error");
  }
validateForm();
}
document.getElementById('signup-password').addEventListener('input', line2);

// focus out 될때 빈값이면 입력하라고 하기
function handlPasswordBlur() {
  var passwordInput = document.getElementById("signup-password");
  var errorMessage = document.getElementById("password-error");

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
document.getElementById("signup-password").addEventListener("blur", handlPasswordBlur);


// 로그인 유효성 검사
function validateForm() {
  var emailInput = document.getElementById("signup-email");
  var passwordInput = document.getElementById("signup-password");
  var loginButton = document.querySelector(".login");

  var emailError = document.getElementById("email-error").style.display === "block";
  var passwordError = document.getElementById("password-error").style.display === "block";

  if (emailInput.value.trim() !== "" && !emailError && passwordInput.value.length >= 8 && !passwordError) {
    loginButton.disabled = false;
    loginButton.classList.remove("disabled");
  } else {
    loginButton.disabled = true;
    loginButton.classList.add("disabled");
  }
}

