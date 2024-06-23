document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login_block');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    const submitButton = form.querySelector('.login_bt');
    const nicknameInput = form.querySelector('#nickname');
    const passwordCheckInput = form.querySelector('#password_check');
    const signUpButton = form.querySelector('.sign_up_bt');
    const toggle_bts = form.querySelectorAll('.bt_toggle_pw');
    const inputTags = form.querySelectorAll('input');

    toggle_bts.forEach(button => {
        button.addEventListener('click', ({e, target}) => {
            const targetInput = target.previousElementSibling.previousElementSibling;

            if(targetInput && (targetInput.type === 'password' || targetInput.type === 'text')){
                targetInput.setAttribute('type', targetInput.getAttribute('type') === 'password' ? 'text' : 'password');

                target.src = targetInput.type === 'password' ? 'ic_eye_off.png' : 'ic_eye_on.png';
            }else{
                console.log('fail');
            }
        });
    });

    inputTags.forEach(inputTag => {
        inputTag.addEventListener('focusout', ({e, target}) =>{
            const type = target.getAttribute("id");
            const errTag = target.nextElementSibling;
            const isEmpty = target.value === '' ? true : false;
            if(isEmpty){
                switch(type){
                    case "email":
                        if(errTag.dataset.type === 'email_err'){
                            errTag.textContent = '이메일을 입력해주세요.';
                            target.classList.add('input_error');
                        }else {
                            throw new Error('No span for error message!');
                        }
                        break;
                    case "nickname":
                        if(errTag.dataset.type === 'nick_err'){
                            errTag.textContent = '닉네임을 입력해주세요.';
                            target.classList.add('input_error');
                        }else {
                            throw new Error('No span for error message!');
                        }
                        break;
                    case "password":
                        if(errTag.dataset.type === 'pw_err'){
                            errTag.textContent = '비밀번호를 입력해주세요.';
                            target.classList.add('input_error');
                        }else {
                            throw new Error('No span for error message!');
                        }
                        break;
                    case "password_check":
                        if(errTag.dataset.type === 'pw_check_err'){
                            errTag.textContent = '비밀번호를 입력해주세요.';
                            target.classList.add('input_error');
                        }else {
                            throw new Error('No span for error message!');
                        }
                        break;
                }
            }else{
                switch(type){
                    case "email":
                        if(errTag.dataset.type === 'email_err'){
                            if(emailCheck(target.value)){
                                errTag.textContent = '';
                                target.classList.remove('input_error');
                            }
                            else{
                                errTag.textContent = '잘못된 이메일 형식입니다.';
                                target.classList.add('input_error');
                            }
                        }else {
                            throw new Error('No span for error message!');
                        }
                        break;
                    case "nickname":
                        if(errTag.dataset.type === 'nick_err'){
                            errTag.textContent = '';
                            target.classList.remove('input_error');
                        }else {
                            throw new Error('No span for error message!');
                        }
                        break;
                    case "password":
                        if(errTag.dataset.type === 'pw_err'){
                            if(target.value.trim().length >= 8){
                                errTag.textContent = '';
                                target.classList.remove('input_error');
                            }
                            else{
                                errTag.textContent = '비밀번호를 8자 이상 입력해주세요.';
                                target.classList.add('input_error');
                            }
                        }else {
                            throw new Error('No span for error message!');
                        }
                        break;
                    case "password_check":
                        if(errTag.dataset.type === 'pw_check_err'){
                            if(target.value === document.querySelector('#password').value){
                                errTag.textContent = '';
                                target.classList.remove('input_error');
                            }
                            else{
                                console.log(target.value.length);
                                errTag.textContent = '비밀번호가 일치하지 않습니다.';
                                target.classList.add('input_error');
                            }
                        }else {
                            throw new Error('No span for error message!');
                        }
                        break;
                }
            }
        });
    });
    
    function checkInputs() {
        const emailValue = emailInput.value;
        const emailFilled = emailCheck(emailValue);
        const passwordFilled = passwordInput.value.trim() !== '';
        const pwLengthFulfilled = passwordInput.value.trim().length >= 8;
        if(signUpButton){
            const nicknameFilled = nicknameInput.value.trim() !== '';
            const passwordCheckFilled = passwordCheckInput.value.trim() !== '';
            const passwordMatchChecked = passwordInput.value.trim() === passwordCheckInput.value.trim();
            if (emailFilled && passwordFilled && nicknameFilled && passwordCheckFilled && passwordMatchChecked && pwLengthFulfilled) {
                signUpButton.disabled = false;
                signUpButton.classList.add('enabled');
            } else {
                signUpButton.disabled = true;
                signUpButton.classList.remove('enabled');
            }
            nicknameInput.addEventListener('input', checkInputs);
            passwordCheckInput.addEventListener('input', checkInputs);
            
        }
        else{
            if (emailFilled && passwordFilled && pwLengthFulfilled) {
                submitButton.disabled = false;
                submitButton.classList.add('enabled');
            } else {
                submitButton.disabled = true;
                submitButton.classList.remove('enabled');
            }
        }
    }
    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);
    
    /*
        아래 내용은 기존에 작동하지 않고 자꾸 더 아래쪽에 있는 내용이 작동하지 않길래, 
        원인을 고민하다가, 화면 내에 나머지 버튼이 존재하지 않아서 루프를 도는 것으로 추정하여
        조건문을걸어 해당 버튼이 존재할 때, 리스너를 등록하는 형태로 변경했습니다. 
        아무래도, 페이지 2개에 대한 작업을 하나의 js에서 수행하여 발생한 문제같으나, 
        다른 원인이 있는지는 모르겠습니다. 혹시 아신다면 설명해주시면 감사드리겠습니다.
    */
    if(submitButton){
        submitButton.addEventListener('click', ({e, target}) => {
            const isEnabled = target.classList.contains('enabled');
            if(isEnabled){
                window.location.href = './items.html';
            }else{
                e.preventDefault();
            }
        });
    }
    
    if(signUpButton){
        signUpButton.addEventListener('click', ({e, target}) => {
            const isEnabled = target.classList.contains('enabled'); 
            if(isEnabled){
                window.location.href = './signin.html';
            }else{
                e.preventDefault();
            }
        });
    }
    
    

});

function emailCheck(email_address){     
	email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(email_regex.test(email_address)){ 
		return true; 
	}else{
		return false;
	}
}


