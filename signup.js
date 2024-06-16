const emailInput = document.querySelector('.email input');
const emailError = document.querySelector('#email-error');
const nickNameInput = document.querySelector('.nickname input');
const nickNameError = document.querySelector('#nickname-error');
const signupButton = document.querySelector('#signup-button');

const passwordInput = document.querySelector('.password input');
const passwordError = document.querySelector('#password-error');
const passwordCheckInput = document.querySelector('.password-check input');
const passwordCheckError = document.querySelector('#password-check-error');

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

function validateNickname() {
  if (nickNameInput.value.trim() === '') {
    nickNameError.textContent = '닉네임을 입력해주세요.';
    nickNameError.style.display = 'block';
    nickNameInput.style.border = '1px solid red';
    return false;
  } else {
    nickNameError.textContent = '';
    nickNameError.style.display = 'none';
    nickNameInput.style.border = 'none';
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

function validatePasswordCheck() {
  if (passwordInput.value !== passwordCheckInput.value) {
    passwordCheckError.textContent = '비밀번호가 일치하지 않습니다.';
    passwordCheckError.style.display = 'block';
    return false;
  } else {
    passwordCheckError.textContent = '';
    passwordCheckError.style.display = 'none';
    return true;
  }
}

function validateForm() {
  const isEmailValid = validateEmail();
  const isNicknameValid = validateNickname();
  const isPasswordValid = validatePassword();
  const isPasswordCheckValid = validatePasswordCheck();
  if (isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid) {
    signupButton.parentNode.href = '/signin.html';
  } else {
    signupButton.removeAttribute('href');
  }
}

emailInput.addEventListener('blur', validateEmail);
nickNameInput.addEventListener('blur', validateNickname);
passwordInput.addEventListener('blur', validatePassword);
passwordCheckInput.addEventListener('blur', validatePasswordCheck);

signupButton.addEventListener('click', validateForm);
