import { ChangeEvent, useState } from 'react';
import useDidMountEffect from './useDidMountEffect';
import { validType } from 'types/@shared/authTypes';

function useEmail() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<validType>('default');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setEmail(value);
  };

  useDidMountEffect(() => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (email === '') {
      setMessage('이메일을 입력해주세요');
      setResult('invalid');
    } else if (!regex.test(email)) {
      setMessage('잘못된 이메일 형식입니다');
      setResult('invalid');
    } else {
      setResult('valid');
    }
  }, [email]);

  return { email, handleEmailChange, result, message };
}

export default useEmail;
