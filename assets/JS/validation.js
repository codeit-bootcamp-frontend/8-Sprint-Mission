function printErrMessage(isValid, inputElement) {
  const errMsg = inputElement.nextElementSibling;
  if (isValid) {
    errMsg.classList.remove('show-msg');
    inputElement.classList.remove('error');
  } else {
    errMsg.classList.add('show-msg');
    inputElement.classList.add('error');
  }
}
// 에러메세지 출력

export function isEmail(value, inputElement) {
  const isValid = value.includes('@');
  printErrMessage(isValid, inputElement);
  return isValid;
}
// 이메일 검사

export function isNotEmpty(value, inputElement) {
  const isValid = value.trim() !== '';
  printErrMessage(isValid, inputElement);
  return isValid;
}
// 이메일,닉네임 검사

export function hasMinLength(value, minLength, inputElement) {
  const isValid = value.length >= minLength;
  printErrMessage(isValid, inputElement);
  return isValid;
}
// 최소 비밀번호 검사

export function isEqualsPassword(value, otherValue, inputElement) {
  const isValid = value === otherValue;
  printErrMessage(isValid, inputElement);
  return isValid;
}
// 비밀번호 일치 검사

export function isPasswordHide(btn, input) {
  const isPasswordVisible = input.type === 'password';
  input.type = isPasswordVisible ? 'text' : 'password';
  btn.classList.toggle('show', isPasswordVisible);
}
// 비밀번호 보이기 활성화 버튼
