import { ChangeEvent, useState } from 'react';
import useDidMountEffect from './useDidMountEffect';
import { validType } from './useValidForm';

function useVerifyPassword(password: string) {
  const [verifyPassword, setVerifyPassword] = useState('');
  const [result, setResult] = useState<validType>('default');
  const [message, setMessage] = useState('');

  const handleVerifyPasswordChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setVerifyPassword(value);
  };

  useDidMountEffect(() => {
    if (verifyPassword !== password) {
      setMessage('비밀번호가 일치하지 않습니다');
      setResult('invalid');
    } else {
      setResult('valid');
    }
  }, [verifyPassword]);

  return { verifyPassword, handleVerifyPasswordChange, result, message };
}

export default useVerifyPassword;
