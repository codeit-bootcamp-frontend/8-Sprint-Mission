const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');
const emailAlertMessage = document.getElementById('email-alert-message');
const passwordAlertMessage = document.getElementById('password-alert-message');
const loginButton = document.getElementById('login-button');

function emailFocusIn() {
  emailInput.classList.add('focus-in-blue');
}

function emailAlert() {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/;
  if (emailInput.value === '') {
    emailInput.classList.add('alert-border');
    emailAlertMessage.textContent = '이메일을 입력해주세요';
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('alert-border');
    emailAlertMessage.textContent = '잘못된 이메일 형식입니다';
  } else {
    emailInput.classList.remove('alert-border');
    emailAlertMessage.textContent = '';
  }
  checkButtonState();
}

function passwordFocusIn() {
  passwordInput.classList.add('focus-in-blue');
}

function passwordAlert() {
  if (passwordInput.value === '') {
    passwordInput.classList.add('alert-border');
    passwordAlertMessage.textContent = '비밀번호를 입력해주세요';
  } else if (passwordInput.value.length < 8) {
    passwordInput.classList.add('alert-border');
    passwordAlertMessage.textContent = '비밀번호를 8자 이상 입력해주세요';
  } else {
    passwordInput.classList.remove('alert-border');
    passwordAlertMessage.textContent = '';
  }
  checkButtonState();
}

function checkButtonState() {
  const emailEnable =
    emailInput.value !== '' && emailAlertMessage.textContent === '';
  const passwordEnable =
    passwordInput.value !== '' && passwordAlertMessage.textContent === '';

  if (emailEnable && passwordEnable) {
    loginButton.disabled = false;
    loginButton.classList.add('button-enable');
  } else {
    loginButton.disabled = true;
    loginButton.classList.remove('button-enable');
  }
}

function toItems() {
  window.location.href = '/items';
}

emailInput.addEventListener('focusin', emailFocusIn);
emailInput.addEventListener('focusout', emailAlert);
passwordInput.addEventListener('focusin', passwordFocusIn);
passwordInput.addEventListener('focusout', passwordAlert);
emailInput.addEventListener('input', emailAlert);
passwordInput.addEventListener('input', passwordAlert);
loginButton.addEventListener('click', toItems);
