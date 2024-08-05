// import { useEffect, useState } from 'react';
import useEmail from './useEmail';
import usePassword from './usePassword';

function useLoginForm() {
  const { email, handleEmailChange, result: emailValidResult, message: emailValidMessage } = useEmail();
  const { password, handlePasswordChange, result: passwordValidResult, message: passwordValidMessage } = usePassword();
  const isFormValid = [emailValidResult, passwordValidResult].every(result => result === 'valid');

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
