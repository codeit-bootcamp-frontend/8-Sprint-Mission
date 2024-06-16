const emailInput = document.querySelector('.email input');
const emailError = document.querySelector('#email-error');
const loginButton = document.querySelector('#login-button');

const passwordInput = document.querySelector('.password input');
const passwordError = document.querySelector('#password-error');

function validateEmail() {
  if (emailInput.value.trim() === '') {
    emailError.textContent = '이메일을 입력해주세요.';
    emailError.style.display = 'block';
    emailInput.style.border = '1px solid red';
    return false;
  } else if (!emailInput.value.includes('@')) {
    emailError.textContent = '잘못된 이메일 형식입니다.';
    emailError.style.display = 'block';
    emailInput.style.border = '1px solid red';
    return false;
  } else {
    emailError.textContent = '';
    emailError.style.display = 'none';
    emailInput.style.border = 'none';
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.trim() === '') {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordError.style.display = 'block';
    return false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
    passwordError.style.display = 'block';
    return false;
  } else {
    passwordError.textContent = '';
    passwordError.style.display = 'none';
    return true;
  }
}

function validateForm() {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  if (isEmailValid && isPasswordValid) {
    loginButton.parentNode.href = '/items.html';
  } else {
    loginButton.removeAttribute('href');
  }
}

emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);

loginButton.addEventListener('click', validateForm);
