const regaxEmail =
  /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

export function validEmail(value: string) {
  if (value === "") return "이메일을 입력해주세요";
  else if (!regaxEmail.test(value)) return "잘못된 이메일 형식입니다";
  return "";
}

export function validNickname(value: string) {
  if (value === "") return "닉네임을 입력해주세요";
  return "";
}

export function validPassword(value: string) {
  if (value === "") return "비밀번호를 입력해주세요";
  else if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요";
  return "";
}

export function validPasswordConfirm(value1: string, value2: string) {
  if (value1 !== value2) return "비밀번호가 일치하지 않습니다.";
  return "";
}

const valid = {
  validEmail,
  validNickname,
  validPassword,
  validPasswordConfirm,
};
export default valid;
