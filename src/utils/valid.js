export function validEmail(target) {
  if (target.validity.valueMissing) return "이메일을 입력해주세요";
  else if (target.validity.typeMismatch) return "잘못된 이메일 형식입니다";
  return "";
}

export function validNickname(target) {
  if (target.validity.valueMissing) return "닉네임을 입력해주세요";
  return "";
}

export function validPassword(target) {
  if (target.validity.valueMissing) return "비밀번호를 입력해주세요";
  else if (target.validity.tooShort) return "비밀번호를 8자 이상 입력해주세요";
  return "";
}

export function validConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return;
  } else if (password.value === confirmPassword?.value) {
    confirmPassword.nextSibling?.remove();
    confirmPassword.classList.remove("auth__invalid");
  } else {
    displayInvalidMessage(confirmPassword, "비밀번호가 일치하지 않습니다..");
  }
  return "";
}

function displayInvalidMessage(target, message) {
  let span;
  if (target.nextSibling?.tagName === "SPAN") {
    span = target.nextSibling;
  } else {
    span = document.createElement("span");
    target.after(span);
  }
  span.style.padding = "8px 16px 0px";
  span.textContent = message;
  span.style.color = "#f74747";
  target.classList.add("auth__invalid");
}

const valid = {
  validEmail,
  validNickname,
  validPassword,
  validConfirmPassword,
};
export default valid;
