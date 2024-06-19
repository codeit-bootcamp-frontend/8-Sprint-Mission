import { useNavigate } from 'react-router-dom';

/**
 * 인자로 들어온 경로로 이동할 수 있게 하는 함수를 반환하는 커스텀 훅
 *
 * @returns navigateTo: (path: string) => void
 */
const useNavigateTo = () => {
  const navigator = useNavigate();

  const navigateTo = (path: string) => {
    navigator(path);
  };

  return { navigateTo };
};

export default useNavigateTo;
