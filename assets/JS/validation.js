export function isEmail(value, inputElement) {
  const emailValid = value.includes("@");
  const errMsg = inputElement.nextElementSibling;
  if (!emailValid) {
    errMsg.classList.add("show-msg");
    inputElement.classList.add("error");
  } else {
    errMsg.classList.remove("show-msg");
    inputElement.classList.remove("error");
  }
  return emailValid;
}
// 이메일 검사

export function isNotEmpty(value, inputElement) {
  const isInvalid = value.trim() === "";
  const errMsg = inputElement.nextElementSibling;
  if (isInvalid) {
    errMsg.classList.add("show-msg");
    inputElement.classList.add("error");
  } else {
    errMsg.classList.remove("show-msg");
    inputElement.classList.remove("error");
  }
  return isInvalid;
}
// 이메일,닉네임 검사

export function hasMinLength(value, minLength, inputElement) {
  const passwordValid = value.length < minLength;
  const errMsg = inputElement.nextElementSibling;

  if (passwordValid) {
    errMsg.classList.add("show-msg");
    inputElement.classList.add("error");
  } else {
    errMsg.classList.remove("show-msg");
    inputElement.classList.remove("error");
  }
  return passwordValid;
}
// 최소 비밀번호 검사

export function isEqualsPassword(value, otherValue, inputElement) {
  const isInvalid = value !== otherValue;
  const errMsg = inputElement.nextElementSibling;
  if (isInvalid) {
    errMsg.classList.add("show-msg");
    inputElement.classList.add("error");
  } else {
    errMsg.classList.remove("show-msg");
    inputElement.classList.remove("error");
  }
  return isInvalid;
}
// 비밀번호 일치 검사
