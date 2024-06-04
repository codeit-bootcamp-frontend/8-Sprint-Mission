// 모듈화 전의 통짜 스크립트입니다. 사용되지 않습니다.

const passwordVisibilityIcons = document.querySelectorAll('.password-visibility-icon');

function toggleVisibility (e) {
    e.target.classList.toggle('visible');
    
    const isVisible = e.target.classList.contains('visible');
    const inputField = e.target.previousElementSibling;
    
    if (isVisible) {
        e.target.setAttribute('src', '../imgs/EyeIcon.png');
        inputField.setAttribute('type', 'text');
        return;
    }

    e.target.setAttribute('src', '../imgs/EyeIconSlashed.png');
    inputField.setAttribute('type', 'password');
}

for (let each of passwordVisibilityIcons) {
    each.addEventListener('click', toggleVisibility);
}

// ------------------------------------------------

const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.doit');
const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');
const verifyPasswordInput = document.querySelector('#verify-password');
const passwordMismatchingMsg = document.querySelector('.password-mismatching-msg');

function filledInputCheck() {
    const hiddenPlaceholders = document.querySelectorAll('input:not(:placeholder-shown)');

    return hiddenPlaceholders.length === inputs.length
    ? true
    : false;
}

function passwordVerifiedCheck() {
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

function btnValidCheck() {
    const validChecklist = [filledInputCheck(), passwordVerifiedCheck()];

    validChecklist.every((e) => e === true)
    ? btn.classList.add('valid')
    : btn.classList.remove('valid');
}

form.addEventListener('keyup', btnValidCheck);