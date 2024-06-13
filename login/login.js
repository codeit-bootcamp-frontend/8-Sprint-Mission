import { isValidEmail, isValidPassword } from "../modules/validations.js";
import { loginValidationState } from "../modules/state.js";

const validation = new loginValidationState();

const emailTag = document.getElementById("email");
const passwordTag = document.getElementById("password");
const emailErrorTag = document.getElementById("email-error-message");
const passwordErrorTag = document.getElementById("password-error-message");
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


emailTag.addEventListener("focusout", (event) => {
   
   const emailValidate = isValidEmail(event.target.value);
   
   if (emailValidate.isvaild) {
        validation.setValid("email", true);
        event.target.style.border = "0.1rem solid var(--blue)";
        activateLoginBtn();
    } else {
        let errorMessage = '';
        validation.setValid("email", false);
        activateLoginBtn();

        switch (emailValidate.message) {
            case "empty":
                errorMessage = "이메일을 입력해주세요";
                break;
        
            case "invalid":
                errorMessage = "잘못된 이메일 형식입니다.";
                break;
        }

        event.target.style.border = "0.1rem solid red";
        emailErrorTag.style.visibility="visible";
        emailErrorTag.textContent = errorMessage;
   }
});

emailTag.addEventListener("focusin", (event) => {
    event.target.style.border = "0.1rem solid var(--blue)";
    emailErrorTag.style.visibility = "hidden";
    emailErrorTag.textContent = '';
})

passwordTag.addEventListener("focusout", (event) => {
   const passwordValidate = isValidPassword(event.target.value);
   
   if (passwordValidate.isvaild) {
        validation.setValid("password", true);
        event.target.style.border = "0.1rem solid var(--blue)";
        activateLoginBtn();
    } else {
        let errorMessage = '';
        validation.setValid("password", false);
        activateLoginBtn();
        
        switch (passwordValidate.message) {
            case "empty":
                errorMessage = "비밀번호를 입력해주세요";
                break;
        
            case "less length":
                errorMessage = "비밀번호를 8자 이상 입력해주세요.";
                break;
        }

        event.target.style.border = "0.1rem solid red";
        passwordErrorTag.style.visibility="visible";
        passwordErrorTag.textContent = errorMessage;
   }
});

passwordTag.addEventListener("focusin", (event) => {
    event.target.style.border = "0.1rem solid var(--blue)";
    passwordErrorTag.style.visibility = "hidden";
    passwordErrorTag.textContent = '';
})


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