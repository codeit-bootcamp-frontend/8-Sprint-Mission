// constants
const INPUT_WRAPPER = 'auth-input-wrapper';
const PATHNAME_LOGIN = '/pages/login/';
const PATHNAME_SIGNUP = '/pages/signup/';
const AUTH_FORM = 'auth-form';

// variables
let isValidEmail = false;
let isValidPassword = false;
let isValidNickName = false;
let isPasswordMatched = false;

// element
const inputEmail = document.querySelector(`.${INPUT_WRAPPER} .auth-email`);
const inputPassword = document.querySelector(
  `.${INPUT_WRAPPER} .auth-password`
);
const inputNickname = document.querySelector(
  `.${INPUT_WRAPPER} #signup-nickname`
);
const inputVerifyPassword = document.querySelector(
  `.${INPUT_WRAPPER} #verify-password`
);
const authForm = document.querySelector(`.${AUTH_FORM}`);
const submitButton = document.querySelector(
  `.${AUTH_FORM} .auth-submit-button`
);

// input control functions
/**
 * Submit이 활성화될 수 있는 지 판별하는 함수
 */
const validateSubmit = () => {
  const pathname = window.location.pathname;
  if (
    (pathname === PATHNAME_LOGIN && isValidEmail && isValidPassword) ||
    (pathname === PATHNAME_SIGNUP &&
      isValidEmail &&
      isValidPassword &&
      isValidNickName &&
      isPasswordMatched)
  ) {
    submitButton.className = 'auth-submit-button activate';
    return;
  }
  submitButton.className = 'auth-submit-button';
};

/**
 * 입력값이 유효하지 않은 경우, error 스타일을 적용시키는 함수
 *
 * @param {*} input input element
 * @param {*} message 에러 발생 시 input element 아래에 표출될 메시지
 */
const showError = (input, message) => {
  // 비밀번호 표시 숨김 아이콘을 position: absolute로 설정하여 위치를 잡아주기 위해
  // password-wrapper로 password input이 한 번 감싸져 있는 것을 풀기 위함
  const inputWrapper =
    input.parentElement.classList[0] === INPUT_WRAPPER
      ? input.parentElement
      : input.parentElement.parentElement;
  inputWrapper.className = `${INPUT_WRAPPER} error`;
  const small = inputWrapper.querySelector('small');
  small.innerText = message;
  validateSubmit();
};

/**
 * 입력값이 유효한 값인 경우, success 스타일을 적용시키는 함수
 *
 * @param {*} input element
 */
const showSuccess = (input) => {
  const inputWrapper =
    input.parentElement.classList[0] === INPUT_WRAPPER
      ? input.parentElement
      : input.parentElement.parentElement;
  inputWrapper.className = `${INPUT_WRAPPER} success`;
  validateSubmit();
};

/**
 * 입력된 이메일란 내용을 유효성 검사하여 error 혹은 success를 판별하는 함수
 *
 * @param {*} event event object
 * @returns error 혹은 success 결과에 따른 스타일 적용 함수
 */
const validateEmail = (event) => {
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const email = event.target.value;

  if (regex.test(email)) {
    isValidEmail = true;
    return showSuccess(event.target);
  }

  isValidEmail = false;
  if (email === '') {
    return showError(event.target, '이메일을 입력해주세요');
  }
  showError(event.target, '잘못된 이메일 형식입니다');
};

/**
 * 입력된 닉네임란 내용을 유효성 검사하여 error 혹은 success를 판별하는 함수
 *
 * @param {*} event event object
 * @returns error 혹은 success 결과에 따른 스타일 적용 함수
 */
const validateNickname = (event) => {
  const nickname = event.target.value;

  if (nickname === '') {
    isValidNickName = false;
    return showError(event.target, '닉네임을 입력해주세요');
  }
  isValidNickName = true;
  showSuccess(event.target);
};

/**
 * 입력된 비밀번호 확인란 내용이 비밀번호란과 일치하는 지 검사하여 error 혹은 success를 판별하는 함수
 *
 * @param {*} event event object
 * @returns error 혹은 success 결과에 따른 스타일 적용 함수
 */
const validatePasswordMatch = () => {
  const originPassword = inputPassword.value;
  const verifyPassword = inputVerifyPassword.value;

  if (originPassword !== verifyPassword) {
    isPasswordMatched = false;
    return showError(inputVerifyPassword, '비밀번호가 일치하지 않습니다.');
  }
  isPasswordMatched = true;
  showSuccess(inputVerifyPassword);
};

/**
 * 입력된 비밀번호란 내용을 유효성 검사하여 error 혹은 success를 판별하는 함수
 *
 * @param {*} event event object
 * @returns error 혹은 success 결과에 따른 스타일 적용 함수
 */
const validatePassword = (event) => {
  const password = event.target.value;

  // 비밀번호 확인란이 있는 회원가입 페이지에서만 비밀번호 확인란과 일치 검사 시행
  if (inputVerifyPassword) {
    validatePasswordMatch();
  }

  isValidPassword = false;
  if (password === '') {
    return showError(event.target, '비밀번호를 입력해주세요');
  }
  if (password.length < 8) {
    return showError(event.target, '비밀번호를 8자 이상 입력해주세요');
  }

  isValidPassword = true;
  showSuccess(event.target);
};

const sumbitForm = () => {
  moveLocation('/items');
};

// addEventListeners
inputEmail.addEventListener('focusout', (event) => validateEmail(event));
inputPassword.addEventListener('focusout', (event) => validatePassword(event));
authForm.addEventListener('submit', () => sumbitForm);

// 회원가입 페이지라면
if (inputNickname) {
  inputNickname.addEventListener('focusout', (event) =>
    validateNickname(event)
  );
}
if (inputVerifyPassword) {
  inputVerifyPassword.addEventListener('focusout', () =>
    validatePasswordMatch()
  );
}
