import useEmail from './useEmail';
import usePassword from './usePassword';
import useNickname from './useNickname';
import useVerifyPassword from './useVerifyPassword';

function useSignupForm() {
  const { email, handleEmailChange, result: emailValidResult, message: emailValidMessage } = useEmail();
  const { password, handlePasswordChange, result: passwordValidResult, message: passwordValidMessage } = usePassword();
  const { nickname, handleNicknameChange, result: nicknameValidResult, message: nicknameValidMessage } = useNickname();
  const {
    verifyPassword,
    handleVerifyPasswordChange,
    result: verifyPasswordValidResult,
    message: verifyPasswordMessage,
  } = useVerifyPassword(password);
  const isFormValid = [emailValidResult, passwordValidResult, nicknameValidResult, verifyPasswordValidResult].every(
    result => result === 'valid',
  );

  return {
    form: {
      email,
      password,
      nickname,
      verifyPassword,
    },
    handler: {
      handleEmailChange,
      handlePasswordChange,
      handleNicknameChange,
      handleVerifyPasswordChange,
    },
    result: {
      emailValidResult,
      passwordValidResult,
      nicknameValidResult,
      verifyPasswordValidResult,
    },
    message: {
      emailValidMessage,
      passwordValidMessage,
      nicknameValidMessage,
      verifyPasswordMessage,
    },
    isFormValid,
  };
}

export default useSignupForm;
