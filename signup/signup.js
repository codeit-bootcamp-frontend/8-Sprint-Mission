import handleError from "../modules/handleError.js";
import handlePasswordVisiblity from "../modules/passwordVisibility.js";
import { signupValidationState, passwordState } from "../modules/state.js";

const validation = new signupValidationState();
const password = new passwordState();


const activateSignupBtn = () => {
    const signupBtn = document.getElementById("signup-btn");
    
    if (
        validation.email 
        && validation.nickname
        && validation.password
        && validation.passwordConfirm
    ) {
        signupBtn.style.backgroundColor = "var(--blue)";
        signupBtn.disabled = false;
    } else {
        signupBtn.style.backgroundColor = "var(--gray-400)";
        signupBtn.disabled = true;
    }
}



handleError({
    inputType:"이메일",
    handleBtn:activateSignupBtn,
    validation,
});
handleError({
    inputType:"닉네임",
    handleBtn:activateSignupBtn,
    validation,
});
handleError({
    inputType:"비밀번호",
    handleBtn:activateSignupBtn,
    validation,
    password,
});
handleError({
    inputType:"비밀번호 확인",
    handleBtn:activateSignupBtn,
    validation,
    password,
});

handlePasswordVisiblity();
handlePasswordVisiblity('confirm');

const goOtherPage = () => {
    location.href = '../login/login.html';
}

const formTag = document.getElementById("signup-form");
formTag.addEventListener('submit', (event) => {
    event.preventDefault();
    goOtherPage();
})
