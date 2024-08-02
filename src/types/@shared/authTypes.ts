// 단순 true, false가 아닌 이유
// : 첫 상태를 false로 두면 모든 형식이 맞지 않는 상태로 시작하고,
// true로 두면 아무 것도 입력하지 않아도 유효성 검사를 통과해버림
export type validType = 'default' | 'valid' | 'invalid';
