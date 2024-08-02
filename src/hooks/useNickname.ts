import { ChangeEvent, useState } from 'react';
import useDidMountEffect from './useDidMountEffect';
import { validType } from './useValidForm';

function useNickname() {
  const [nickname, setNickname] = useState('');
  const [result, setResult] = useState<validType>('default');
  const [message, setMessage] = useState('');

  const handleNicknameChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setNickname(value);
  };

  useDidMountEffect(() => {
    if (nickname === '') {
      setMessage('닉네임을 입력해주세요');
      setResult('invalid');
    } else {
      setResult('valid');
    }
  }, [nickname]);

  return { nickname, handleNicknameChange, result, message };
}

export default useNickname;
