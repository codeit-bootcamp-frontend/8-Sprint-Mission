import { ChangeEvent, useState } from 'react';
import useDidMountEffect from './useDidMountEffect';
import { validType } from 'types/@shared/authTypes';

function usePassword() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState<validType>('default');
  const [message, setMessage] = useState('');

  const handlePasswordChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setPassword(value);
  };

  useDidMountEffect(() => {
    if (password === '') {
      setMessage('비밀번호를 입력해주세요');
      setResult('invalid');
    } else if (password.length < 8) {
      setMessage('비밀번호를 8자 이상 입력해주세요');
      setResult('invalid');
    } else {
      setResult('valid');
    }
  }, [password]);

  return { password, handlePasswordChange, result, message };
}

export default usePassword;
