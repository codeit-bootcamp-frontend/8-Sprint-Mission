// Sprint Mission 4 기본 요구사항:
// 이메일 input에서 focus out 할 때, 
// 값이 없을 경우 input에 빨강색 테두리와 아래에 
// “이메일을 입력해주세요.” 빨강색 에러 메세지를 보입니다.
// 이메일 input에서 focus out 할 때, 
// 이메일 형식에 맞지 않는 경우 input에 빨강색 테두리와 아래에 
// “잘못된 이메일 형식입니다” 빨강색 에러 메세지를 보입니다.

input.onblur = function() {
    if (!input.value.includes('@')) {
      input.classList.add('invalid');
      error.innerHTML = '올바른 이메일 주소를 입력하세요.'
    }
  };