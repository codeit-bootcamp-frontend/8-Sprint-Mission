// 회원가입 페이지에서 패스워드와 패스워드 확인 란의 내용이 같은지 체크합니다.
// 같지 않다면 패스워드 확인에 빨간 아웃라인이 나타나고 메시지가 보여집니다.
// 같다면 true를, 같지 않다면 false를 반환합니다. 패스워드 확인 란이 없다면 항상 true를 반환합니다.

const passwordInput = document.querySelector('#password');
const verifyPasswordInput = document.querySelector('#verify-password');
const passwordMismatchingMsg = document.querySelector('.password-mismatching-msg');

export default function passwordVerifiedCheck() {
    if (!verifyPasswordInput) return true;

    if (verifyPasswordInput.value !== passwordInput.value) {
        verifyPasswordInput.classList.add('mismatching');
        passwordMismatchingMsg.classList.remove('hidden');
        return false;
    }

    verifyPasswordInput.classList.remove('mismatching');
    passwordMismatchingMsg.classList.add('hidden');
    return true;
}