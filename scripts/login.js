document.addEventListener("DOMContentLoaded",function(){

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");

    emailInput.addEventListener("focusout", function(){
        loginValidationResults.email = checkEmailValidation(emailInput);
        toggleSubmitButton();
    });

    passwordInput.addEventListener("focusout", function() {
        loginValidationResults.password = checkPasswordValidation(passwordInput);
        toggleSubmitButton();
    });

    togglePassword.addEventListener("click", function(){
        togglePasswordVisibility("password", "toggle-password");
    });
});