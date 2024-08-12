import { useState } from "react";

/**
 * Boolean 형태의 state와 해당 state를 toggle하는 toggle함수를 반환하는 custom hook
 * @param initialValue 상태 초기값
 * @returns [state, toggleState] : state와 state를 toggle하는 함수를 반환
 */
function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState((prevState) => !prevState);

  return [state, toggleState];
}

export default useToggle;
