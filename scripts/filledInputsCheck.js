// 모든 input에 내용이 있는지 체크합니다: 내용이 있다면 true를, 비어있다면 false를 반환합니다.

import { inputs } from "./constLib.js";

export default function filledInputCheck() {

    if (!inputs || !inputs.length) return true;
    
    return [...inputs].every( (e) => e.value !== '' );
}