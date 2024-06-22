import { useEffect, useRef } from 'react';

/**
 * useEffect와 사용 방법은 같으나, 첫 렌더링 시 사이드 이펙트를 없애기 위한 커스텀 훅
 * @param callback
 * @param dependencyArr
 */
const useDidMountEffect = (callback: () => void, dependencyArr: unknown[]) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) callback();
    else didMount.current = true;
  }, dependencyArr);
};

export default useDidMountEffect;

/*
참고 내용
: didMount를 false로 초기화를 했습니다.
즉, 처음 렌더링 할 때는 didMount가 false이기 때문에 콜백함수 func()를 실행하지 않고 didMount를 true로 전환합니다.
그리고 다음 렌더링 때는 didMount가 false가 아닌 true이므로 이때 콜백함수를 실행합니다.

didMount는 useState가 아닌 useRef로 선언이 되었는데,
useRef는 useState와 달리 값이 변경되었다고 해서 Rerendering을 하지 않습니다.

만약 didMount를 useState로 선언을 했다면,
didMount.current = true 시점에서 개발자가 원하지 않음에도 불구하고 Rerendering 발생을 했을 것입니다.
하지만 useRef를 사용함으로써 그런 일은 일어나지 않습니다.

이렇게 해서 첫 렌더링시 useEffect 콜백 함수가 작동하지 않게 할 수 있게 되었습니다.
 */
