// 회원가입 페이지에서 패스워드와 패스워드 확인 란의 내용이 같은지 체크합니다.
// 같지 않다면 패스워드 확인에 빨간 아웃라인이 나타나고 메시지가 보여집니다.
// 패스워드 확인 란이 없다면 바로 return 합니다.

import { passwordInput, verifyPasswordInput } from "./constLib.js";

const passwordMismatchingMessage = document.querySelector('.password-mismatching');

export default function passwordVerifiedCheck(event) {
    if (event.target !== verifyPasswordInput) return;

    const isPasswordMatching = passwordInput.value === verifyPasswordInput.value;

    verifyPasswordInput.classList.toggle('errored', !isPasswordMatching);
    passwordMismatchingMessage.classList.toggle('hidden', isPasswordMatching);
}