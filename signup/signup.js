import { isValidEmail, isValidNickname, isValidPassword, isValidPasswordConfirm } from "../modules/validations.js";

const validation = {
    email: false,
    nickname: false,
    password: false,
    passwordConfirm: false,
    setValid: function (name, newValue) {
        this[`${name}`] = newValue;
    },
}

const password = {
    passwordContent: '',
    passwordConfirmContent: '',
    setContent: function (name, newValue) {
        this[`${name}`] = newValue;
    },
}



const emailTag = document.getElementById("email");
const nicknameTag = document.getElementById("nickname");
const passwordTag = document.getElementById("password");
const passwordConfirmTag = document.getElementById("password-confirm");


const emailErrorTag = document.getElementById("email-error-message");
const nicknameErrorTag = document.getElementById("nickname-error-message");
const passwordErrorTag = document.getElementById("password-error-message");
const passwordConfirmErrorTag = document.getElementById("password-confirm-error-message");


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


emailTag.addEventListener("focusout", (event) => {
   
   const emailValidate = isValidEmail(event.target.value);
   
   if (emailValidate.isvaild) {
        validation.setValid("email", true);
        event.target.style.border = "0.1rem solid var(--blue)";
        activateSignupBtn();
    } else {
        let errorMessage = '';
        validation.setValid("email", false);
        activateSignupBtn();

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

nicknameTag.addEventListener("focusout", (event) => {
   
    const nicknameValidate = isValidNickname(event.target.value);
    
    if (nicknameValidate.isvaild) {
        validation.setValid("nickname", true);
        event.target.style.border = "0.1rem solid var(--blue)";
        passwordConfirmErrorTag.style.visibility = "hidden";
        passwordConfirmErrorTag.textContent = '';
         activateSignupBtn();
    } else {
        let errorMessage = '';
        validation.setValid("nickname", false);
        activateSignupBtn();
 
        switch (nicknameValidate.message) {
            case "empty":
                errorMessage = "닉네임을 입력해주세요.";
                break;
            }
            
        event.target.style.border = "0.1rem solid red";
        nicknameErrorTag.style.visibility="visible";
        nicknameErrorTag.textContent = errorMessage;
    }
 });
 
nicknameTag.addEventListener("focusin", (event) => {
    event.target.style.border = "0.1rem solid var(--blue)";
nicknameErrorTag.style.visibility = "hidden";
     nicknameErrorTag.textContent = '';
})


passwordTag.addEventListener("focusout", (event) => {
    const passwordValidate = isValidPassword(event.target.value);
    password.setContent('passwordContent', event.target.value);
    
    if (passwordValidate.isvaild) {
        validation.setValid("password", true);
        event.target.style.border = "0.1rem solid var(--blue)";
        activateSignupBtn();
    } else {
        let errorMessage = '';
        validation.setValid("password", false);
        activateSignupBtn();
        
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

    const passwordConfirmValidate = isValidPasswordConfirm(password.passwordConfirmContent, event.target.value);

    if (passwordConfirmValidate.isvaild) {
        validation.setValid("passwordConfirm", true);
        passwordConfirmTag.style.border = "0.1rem solid var(--blue)";
        activateSignupBtn();
    } else {
        let errorMessage = '';
        validation.setValid("passwordConfirm", false);
        activateSignupBtn();
        
        switch (passwordConfirmValidate.message) {
            case "differ":
                errorMessage = "비밀번호가 일치하지 않습니다.";
                break;
        }

        passwordConfirmTag.style.border = "0.1rem solid red";
        passwordConfirmErrorTag.style.visibility="visible";
        passwordConfirmErrorTag.textContent = errorMessage;
    }
});

passwordTag.addEventListener("focusin", (event) => {
    event.target.style.border = "0.1rem solid var(--blue)";
    passwordErrorTag.style.visibility = "hidden";
    passwordErrorTag.textContent = '';
})

passwordConfirmTag.addEventListener("focusout", (event) => {
    const passwordConfirmValidate = isValidPasswordConfirm(event.target.value, password.passwordContent);
    password.setContent('passwordConfirmContent', event.target.value);
    
    if (passwordConfirmValidate.isvaild) {
        validation.setValid("passwordConfirm", true);
        event.target.style.border = "0.1rem solid var(--blue)";
        activateSignupBtn();
    } else {
        let errorMessage = '';
        validation.setValid("passwordConfirm", false);
        activateSignupBtn();
        
        switch (passwordConfirmValidate.message) {
            case "differ":
                errorMessage = "비밀번호가 일치하지 않습니다.";
                break;
        }

        event.target.style.border = "0.1rem solid red";
        passwordConfirmErrorTag.style.visibility="visible";
        passwordConfirmErrorTag.textContent = errorMessage;
   }
});

passwordConfirmTag.addEventListener("focusin", (event) => {
    event.target.style.border = "0.1rem solid var(--blue)";
    passwordConfirmErrorTag.style.visibility = "hidden";
    passwordConfirmErrorTag.textContent = '';
})


