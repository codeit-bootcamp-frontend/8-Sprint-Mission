// import openEyeIcon from '../icon/ic_password-eye.svg'
// import hideEyeIcon from '../icon/ic_password-hide-eye.svg'
const loginForm = document.querySelector('.login-form');

function buttonManager(e){
  const target = e.target;
  
  if(target.classList.contains('login-btn')){
    console.log('로그인 버튼 클릭');
    window.location.href = '/item.html';
  }

  if(target.classList.contains('signup-btn')){
    console.log('회원가입 버튼 클릭');
    window.location.href = '/login.html';
  }

  if(target.classList.contains('password-hide-toggle-btn')){
    
      const passwordInput = target.nextElementSibling;

      if(passwordInput.type === 'password'){
        passwordInput.type ='text';
        target.setAttribute('src', '../icon/ic_password-eye.svg');
      }
      else if(passwordInput.type === 'text') {
        passwordInput.type ='password';
        target.setAttribute('src', '../icon/ic_password-hide-eye.svg');
      }

    }
}

loginForm.addEventListener('click', buttonManager);