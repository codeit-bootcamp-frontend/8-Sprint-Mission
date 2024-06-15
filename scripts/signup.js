document.addEventListener("DOMContentLoaded",function(){
    const signupForm = document.getElementById("signupForm");
    const emailInput = document.getElementById("email");
    const nicknameInput = document.getElementById("nickname");
    const passwordInput = document.getElementById("password");
    const checkPasswordInput = document.getElementById("password-check");
    const togglePassword = document.getElementById("toggle-password");
    const checkTogglePassword = document.getElementById("check-toggle-password");

    emailInput.addEventListener("focusout", function(){
        loginValidationResults.email = checkEmailValidation();
        toggleSubmitButton();
    });
    nicknameInput.addEventListener("focusout", function(){
        loginValidationResults.nickname = checkNicknameValidation();
        toggleSubmitButton();
    });
    passwordInput.addEventListener("focusout", function() {
        loginValidationResults.password = checkPasswordValidation(checkPasswordInput);
        toggleSubmitButton();
    });
    checkPasswordInput.addEventListener("focusout", function() {
        loginValidationResults.passwordCheck = checkPasswordMatch();
        toggleSubmitButton();
    });
    togglePassword.addEventListener("click", function(){
        togglePasswordVisibility("password", "toggle-password");
    });
    checkTogglePassword.addEventListener("click", function(){
        togglePasswordVisibility("password-check", "check-toggle-password");
    });

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = '/login.html';
    });
});