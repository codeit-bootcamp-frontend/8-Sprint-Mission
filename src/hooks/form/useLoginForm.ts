import { useEffect, useState } from 'react';
import useEmail from './useEmail';
import usePassword from './usePassword';

function useLoginForm() {
  const { email, handleEmailChange, result: emailValidResult, message: emailValidMessage } = useEmail();
  const { password, handlePasswordChange, result: passwordValidResult, message: passwordValidMessage } = usePassword();
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // emailValidResult, passwordValidResult가 변경될 때마다 모두 valid 상태인지 확인
    const isValid = [emailValidResult, passwordValidResult].every(result => result === 'valid');
    setIsFormValid(isValid);
  }, [emailValidResult, passwordValidResult]);

  return {
    form: {
      email,
      password,
    },
    handler: {
      handleEmailChange,
      handlePasswordChange,
    },
    result: {
      emailValidResult,
      passwordValidResult,
    },
    message: {
      emailValidMessage,
      passwordValidMessage,
    },
    isFormValid,
  };
}

export default useLoginForm;
