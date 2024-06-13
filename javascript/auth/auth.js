// 상수
const INPUT_WRAPPER = 'auth-input-wrapper';

// element
const inputEmail = document.querySelector(`.${INPUT_WRAPPER} .auth-email`);
const inputPassword = document.querySelector(
  `.${INPUT_WRAPPER} .auth-password`
);
const inputNickname = document.querySelector(
  `.${INPUT_WRAPPER} #signup-nickname`
);
// const inputVerifyPassword = document.querySelector(
//   `.${INPUT_WRAPPER} #verify-password`
// );

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
  console.log(input.parentElement.className);
  inputWrapper.className = `${INPUT_WRAPPER} success`;
};

/**
 * 입력된 이메일란 내용을 유효성 검사하여 error 혹은 success를 판별하는 함수
 *
 * @param {*} event event object
 * @returns error 혹은 success 결과에 따른 스타일 적용 함수
 */
const isValidEmail = (event) => {
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const email = event.target.value;

  if (email === '') return showError(event.target, '이메일을 입력해주세요');
  if (regex.test(email)) return showSuccess(event.target);
  return showError(event.target, '잘못된 이메일 형식입니다');
};

/**
 * 입력된 닉네임란 내용을 유효성 검사하여 error 혹은 success를 판별하는 함수
 *
 * @param {*} event event object
 * @returns error 혹은 success 결과에 따른 스타일 적용 함수
 */
const isValidNickname = (event) => {
  const nickname = event.target.value;

  if (nickname === '') return showError(event.target, '닉네임을 입력해주세요');
  return showSuccess(event.target);
};

/**
 * 입력된 비밀번호란 내용을 유효성 검사하여 error 혹은 success를 판별하는 함수
 *
 * @param {*} event event object
 * @returns error 혹은 success 결과에 따른 스타일 적용 함수
 */
const isValidPassword = (event) => {
  const password = event.target.value;
  console.log(password);

  if (password === '') {
    return showError(event.target, '비밀번호를 입력해주세요');
  }
  if (password.length < 8) {
    return showError(event.target, '비밀번호를 8자 이상 입력해주세요');
  }
  return showSuccess(event.target);
};

inputEmail.addEventListener('focusout', (event) => isValidEmail(event));
inputPassword.addEventListener('focusout', (event) => isValidPassword(event));
inputNickname.addEventListener('focusout', (event) => isValidNickname(event));
