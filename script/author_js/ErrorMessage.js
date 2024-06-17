export function deleteErrorMessage(target){

  const hasErrorMessage = target.parentElement.querySelector('.error-message');
  
  if(hasErrorMessage){
    hasErrorMessage.remove();
  }
}

function noValue(target, errorMessage){
  switch(target.name){
    case 'email':
      errorMessage.innerText = '이메일을 입력해주세요';
    break;
    case 'password':
      errorMessage.innerText = '비밀번호를 입력해주세요';
    break;
    case 'nickname':
      errorMessage.innerText = '닉네임을 입력해주세요';
  } 
  target.parentElement.appendChild(errorMessage);
}

function notValidity(target, errorMessage){
  switch(target.name){
    case 'email':
      errorMessage.innerText = '잘못된 이메일 형식입니다';
    break;
    case 'password':
      errorMessage.innerText = '8자 이상 입력해주세요';
    break;
    case 'password-repeat':
      errorMessage.innerText = '비밀번호가 일치하지 않습니다..';
  }
  target.parentElement.appendChild(errorMessage);
}

export function createErrorMessage(target, valid){

  deleteErrorMessage(target)

  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');

  if(!target.value){
      noValue(target, errorMessage);
  }
  else if(!valid){
      notValidity(target, errorMessage);
  }
}


