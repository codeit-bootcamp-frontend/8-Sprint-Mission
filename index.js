const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const emailError2 = document.querySelector(".email-error2");
const password = document.querySelector("#password");
const pwError = document.querySelector(".pw-error");
const pwError2 = document.querySelector(".pw-error2");
const nickname = document.querySelector("#nickname");
const nickError = document.querySelector('.nickname-error');
const passwordChecker = document.querySelector('#password-check');
const passwordCheckerError = document.querySelector('.pwChecker-error');
const loginForm = document.querySelector('#login-form');
const signForm = document.querySelector('#sign-form');
const invisible = document.querySelector('.invisible')

function loginFocusEvent() {
  let value = email.value;
  if (value.length < 1) {
    email.classList.add("error");
    emailError.style.display = "block";
  } else {
    email.classList.remove("error");
    emailError.style.display = "none";
  }
  if (!email.validity.valid) {
    email.classList.add("error2");
    emailError2.style.display = "block";
  } else {
    email.classList.remove("error2");
    emailError2.style.display = "none";
  }
}
email.addEventListener("focusout", loginFocusEvent);

function pwFocusEvent() {
  let pWvalue = password.value;
  if (pWvalue.length < 1) {
    password.classList.add("error");
    pwError.style.display = "block";
  } else {
    password.classList.remove("error");
    pwError.style.display = "none";
  }
  if (pWvalue.length >= 1 && pWvalue.length < 8) {
    password.classList.add("error2");
    pwError2.style.display = "block";
  } else {
    password.classList.remove("error2");
    pwError2.style.display = "none";
  }
}
password.addEventListener("focusout", pwFocusEvent);

function userNameEvent() {
  let nameValue = nickname.value;
  if(nameValue < 1){
    nickname.classList.add('error');
    nickError.style.display = 'block'
  }else{
    nickname.classList.remove('error');
    nickError.style.display = 'none';
  }
}
nickname.addEventListener("focusout", userNameEvent);

function pwCheckEvent() {
  let pWvalue = password.value;
  let pwcValue = passwordChecker.value;
  if (pWvalue !== pwcValue) {
    passwordChecker.classList.add('error');
    passwordCheckerError.style.display = 'block'
  }
}
passwordChecker.addEventListener("focusout", pwCheckEvent);

invisible.addEventListener("click", function (){
  let type = password.type
  if (type === 'password') {
    password.type = 'text';
  }else{
    password.type = 'password'
  }
});

function loginFormEvent(e) {  
  e.preventDefault();
  if (
    (email.value.length < 1 || 
    password.value.length < 1) ||
    email.classList.contains("error") ||
    email.classList.contains("error2") ||
    password.classList.contains("error") ||
    password.classList.contains("error2")
  ) {
    alert('입력사항을 확인해주세요.')
  }else{
    window.location.href = 'item.html'; 
  }
}
loginForm.addEventListener("submit", loginFormEvent);

function passwordFormEvent(e) {
  e.preventDefault();
  if (
    (email.value.length < 1 || 
    password.value.length < 1) ||
    email.classList.contains("error") ||
    email.classList.contains("error2") ||
    password.classList.contains("error") ||
    password.classList.contains("error2") ||
    nickname.classList.contains("error") ||
    passwordChecker.contains('error')
  ) {
    alert('입력사항을 확인해주세요.')
  }else{
    window.location.href = 'signIn.html'; 
  }
}
signForm.addEventListener("submit", passwordFormEvent);

