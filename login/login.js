import handleError from "../modules/handleError.js";
import handleFormTag from "../modules/handleForm.js";
import handlePasswordVisiblity from "../modules/passwordVisibility.js";
import { loginValidationState } from "../modules/state.js";

const validation = new loginValidationState();


const loginBtn = document.getElementById("login-btn");

const activateLoginBtn = () => {
    
    if (validation.email && validation.password) {
        loginBtn.style.backgroundColor = "var(--blue)";
        loginBtn.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "var(--gray-400)";
        loginBtn.disabled = true;
    }
};

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

handlePasswordVisiblity();

handleFormTag('login','/items');