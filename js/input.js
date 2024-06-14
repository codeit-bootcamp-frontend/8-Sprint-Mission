const emailInput = document.querySelector('#email-input');
const emailErrorMessage = document.querySelector('#email-error-message');
const passwordInput = document.querySelector('#password-input');
const passwordErrorMessage = document.querySelector('#password-error-message');

const passwordMinLength = 8;

// email validitiychecker
function emailInputCheck(event) {
  const emailInput = event.target;

  if (emailInput.value === "") {
    emailInput.classList.add('error-input');
    emailErrorMessage.textContent = '이메일을 입력해주세요.';
  }
  // checkValidity() : true ("" or type match), false (different type)
  if (!emailInput.checkValidity()) {
    emailInput.classList.add('error-input');
    emailErrorMessage.textContent = '잘못된 이메일 형식입니다.';
  }
  if (emailInput.checkValidity() && emailInput.value !== "") {
    emailInput.classList.remove('error-input');
    emailErrorMessage.textContent = '';
  }
}

// password validitiychecker
function pwInputCheck(event) {
  const passwordInput = event.target;

  if (emailInput.value.length === 0) {
    passwordInput.classList.add('error-input');
    passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';
  }
  if (passwordInput.value.length < passwordMinLength && passwordInput.value.length > 0) {
    passwordInput.classList.add('error-input');
    passwordErrorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
  }
  if (passwordInput.value.length >= passwordMinLength) {
    passwordInput.classList.remove('error-input');
    passwordErrorMessage.textContent = '';
  }
}

emailInput.addEventListener('focusout', emailInputCheck);
passwordInput.addEventListener('focusout', pwInputCheck);

// login button disabled on/off
const loginButton = document.querySelector('#login-button');

function inputChecker(event) {
  if (passwordInput.value.length >= passwordMinLength
     && emailInput.checkValidity() 
     && emailInput.value !== "") {
      loginButton.disabled = false;
     } else {
      loginButton.disabled = true;
     }
}

emailInput.addEventListener('focusout', inputChecker);
passwordInput.addEventListener('focusout', inputChecker);