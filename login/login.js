import handleError from "../modules/handleError.js";
import { loginValidationState } from "../modules/state.js";

const validation = new loginValidationState();

const passwordTag = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

const activateLoginBtn = () => {
    
    if (validation.email && validation.password) {
        loginBtn.style.backgroundColor = "var(--blue)";
        loginBtn.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "var(--gray-400)";
        loginBtn.disabled = true;
    }
}

handleError({
    inputType:"이메일",
    handleBtn:activateLoginBtn,
    validation,
});
handleError({
    inputType:"비밀번호",
    handleBtn:activateLoginBtn,
    validation,
});

const goOtherPage = () => {
    location.href = '/items';
}

const formTag = document.getElementById("login-form");
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