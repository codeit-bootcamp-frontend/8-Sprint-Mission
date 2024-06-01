document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login_block');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    const submitButton = form.querySelector('.login_bt');

    function checkInputs() {
        const emailValue = emailInput.value;
        const emailFilled = emailValue.includes('@') && emailValue.includes('.') && emailValue.indexOf('@') < emailValue.lastIndexOf('.');
        const passwordFilled = passwordInput.value.trim() !== '';

        if (emailFilled && passwordFilled) {
            submitButton.disabled = false;
            submitButton.classList.add('enabled');
        } else {
            submitButton.disabled = true;
            submitButton.classList.remove('enabled');
        }
    }

    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);
});