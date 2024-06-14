export function validEmail(target) {
  if (target.checkValidity()) {
    target.nextSibling?.remove();
    target.classList.remove("input-invalid");
  } else if (target.validity.valueMissing)
    posInvalid(target, "이메일을 입력해주세요");
  else if (target.validity.typeMismatch)
    posInvalid(target, "잘못된 이메일 형식입니다");
}

export function validNickname(target) {
  if (target.checkValidity()) {
    target.nextSibling?.remove();
    target.classList.remove("input-invalid");
  } else if (target.validity.valueMissing)
    posInvalid(target, "닉네임을 입력해주세요");
}

export function validPassword(target) {
  console.dir(target);
  if (target.checkValidity()) {
    target.nextSibling?.remove();
    target.classList.remove("input-invalid");
  } else if (target.validity.valueMissing) {
    posInvalid(target, "비밀번호를 입력해주세요");
  } else if (target.validity.tooShort) {
    posInvalid(target, "비밀번호를 8자 이상 입력해주세요");
  }
}

export function validConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return;
  } else if (password.value === confirmPassword?.value) {
    confirmPassword.nextSibling?.remove();
    confirmPassword.classList.remove("input-invalid");
  } else {
    posInvalid(confirmPassword, "비밀번호가 일치하지 않습니다..");
  }
}

function posInvalid(target, text) {
  let span;
  if (target.nextSibling?.tagName === "SPAN") {
    span = target.nextSibling;
  } else {
    span = document.createElement("span");
    target.after(span);
  }
  span.textContent = text;
  span.style.color = "#f74747";
  target.classList.add("input-invalid");
}

const valid = {
  validEmail,
  validNickname,
  validPassword,
  validConfirmPassword,
};
export default valid;
