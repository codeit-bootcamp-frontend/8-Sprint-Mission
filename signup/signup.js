import handleError from "../modules/handleError.js";
import { signupValidationState, passwordState } from "../modules/state.js";

const validation = new signupValidationState();

const password = new passwordState();

const passwordTag = document.getElementById("password");
const passwordConfirmTag = document.getElementById("password-confirm");

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



const goOtherPage = () => {
    location.href = '../login/login.html';
}

const formTag = document.getElementById("signup-form");
formTag.addEventListener('submit', (event) => {
    event.preventDefault();
    goOtherPage();
})

const visibleTag = document.getElementById("visibility");
visibleTag.addEventListener("click", (event) => {
    event.target.classList.toggle("active");
    if (event.target.classList.contains("active")) {
        passwordTag.type = 'text';
    } else {
        passwordTag.type = 'password';
    }
})

const confirmVisibleTag = document.getElementById("confirm-visibility");
confirmVisibleTag.addEventListener("click", (event) => {
    event.target.classList.toggle("active");
    if (event.target.classList.contains("active")) {
        passwordConfirmTag.type = 'text';
    } else {
        passwordConfirmTag.type = 'password';
    }
})