// password valid condition
const PW_MIN_LENGTH = 8;

// for button disable toggle
export let emailIsValid = false;
export let nicknameIsValid = false;
export let pwIsValid = false;
export let pwRetypeIsValid = false;

// email validitiychecker
export function emailInputCheck(event) {
  const target = event.target;
  const errorMessage = document.querySelector('#email-error-message');

  if (target.value === "") {
    target.classList.add('error-input');
    errorMessage.textContent = '이메일을 입력해주세요.';
    emailIsValid = false;
  }
  // checkValidity() : true ("" or type match), false (different type)
  if (!target.checkValidity()) {
    target.classList.add('error-input');
    errorMessage.textContent = '잘못된 이메일 형식입니다.';
    emailIsValid = false;
  }
  if (target.checkValidity() && target.value !== "") {
    target.classList.remove('error-input');
    errorMessage.textContent = '';
    emailIsValid = true;
  }
}

// nickname validitiychecker
export function nicknameInputCheck(event) {
  const target = event.target;
  const errorMessage = document.querySelector('#nickname-error-message');

  if (target.value === "") {
    target.classList.add('error-input');
    errorMessage.textContent = '닉네임을 입력해주세요.';
    nicknameIsValid = false;
  } else {
    target.classList.remove('error-input');
    errorMessage.textContent = '';
    nicknameIsValid = true;
  }
}

// password validitiychecker
export function pwInputCheck(event) {
  const target = event.target;
  const errorMessage = document.querySelector('#password-error-message');

  if (target.value.length === 0) {
    target.classList.add('error-input');
    errorMessage.textContent = '비밀번호를 입력해주세요.';
    pwIsValid = false;
  }
  if (target.value.length < PW_MIN_LENGTH && target.value.length > 0) {
    target.classList.add('error-input');
    errorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
    pwIsValid = false;
  }
  if (target.value.length >= PW_MIN_LENGTH) {
    target.classList.remove('error-input');
    errorMessage.textContent = '';
    pwIsValid = true;
  }
}

// retype password validitiychecker
export function pwRetypeInputCheck(event) {
  const target = event.target;
  const pwInput = document.querySelector('#password-input');
  const errorMessage = document.querySelector('#password-retype-error-message');

  if (target.value !== pwInput.value) {
    target.classList.add('error-input');
    errorMessage.textContent = '비밀번호가 일치하지 않습니다.';
    pwRetypeIsValid = false;
  } else {
    target.classList.remove('error-input');
    errorMessage.textContent = '';
    pwRetypeIsValid = true;
  }
}