// 모든 input에 내용이 있는지 체크합니다: 내용이 있다면 (모든 input에 placeholder가 없을 때) true를, 비어있다면 false를 반환합니다.

const inputs = document.querySelectorAll('input');

export default function filledInputCheck() {
    const hiddenPlaceholders = document.querySelectorAll('input:not(:placeholder-shown)');

    return hiddenPlaceholders.length === inputs.length
    ? true
    : false;
}