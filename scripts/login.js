document.addEventListener("DOMContentLoaded",function(){
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");

    emailInput.addEventListener("focusout", function(){
        loginValidationResults.email = checkEmailValidation();
        toggleSubmitButton();
    });

    passwordInput.addEventListener("focusout", function() {
        loginValidationResults.password = checkPasswordInputValidation();
        toggleSubmitButton();
    });

    togglePassword.addEventListener("click", function(){
        togglePasswordVisibility("password", "toggle-password");
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = '/items.html';
    });
});