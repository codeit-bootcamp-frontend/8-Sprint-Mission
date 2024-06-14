document.addEventListener("DOMContentLoaded",function(){

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");

    emailInput.addEventListener("focusout", function(){
        checkEmailValidation(emailInput);
    });

    passwordInput.addEventListener("focusout", function() {
        checkPasswordValidation(passwordInput);
    });

    togglePassword.addEventListener("click", function(){
        togglePasswordVisibility("password", "toggle-password");
    });
});