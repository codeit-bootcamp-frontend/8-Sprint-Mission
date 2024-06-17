const mainBtn = document.querySelector('.login-form button');
const pwHideBtn1 = document.querySelector('.password-hide-toggle-btn');

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
    console.log('eye 버튼 클릭');
  }
}

mainBtn.addEventListener('click', buttonManager);
pwHideBtn1.addEventListener('click', buttonManager);