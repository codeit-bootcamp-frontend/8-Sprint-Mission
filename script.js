document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login_block');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    const submitButton = form.querySelector('.login_bt');
    const nicknameInput = form.querySelector('#nickname');
    const passwordCheckInput = form.querySelector('#password_check');
    const signUpButton = form.querySelector('.sign_up_bt');

    function checkInputs() {
        const emailValue = emailInput.value;
        const emailFilled = emailValue.includes('@') && emailValue.includes('.') && emailValue.indexOf('@') < emailValue.lastIndexOf('.');
        const passwordFilled = passwordInput.value.trim() !== '';
        if(!signUpButton){
            if (emailFilled && passwordFilled) {
                submitButton.disabled = false;
                submitButton.classList.add('enabled');
            } else {
                submitButton.disabled = true;
                submitButton.classList.remove('enabled');
            }
        }
        else{
            const nicknameFilled = nicknameInput.value.trim() !== '';
            const passwordCheckFilled = passwordCheckInput.value.trim() !== '';
            const passwordMatchChecked = passwordInput.value.trim() === passwordCheckInput.value.trim();
            if (emailFilled && passwordFilled && nicknameFilled && passwordCheckFilled && passwordMatchChecked) {
                signUpButton.disabled = false;
                signUpButton.classList.add('enabled');
            } else {
                signUpButton.disabled = true;
                signUpButton.classList.remove('enabled');
            }
            nicknameInput.addEventListener('input', checkInputs);
            passwordCheckInput.addEventListener('input', checkInputs);
        }
    }

    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);
});