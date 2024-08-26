import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { FieldValues, UseFormSetError } from 'react-hook-form';
import { QueryKey } from 'core/config/api/queryKey';
import { signUp, SignUpDto } from 'lib/api/auth';
import localStorageTools from 'lib/localStorage/localStorageTools';
import { StorageNameOfUserInfo } from 'core/config/context/AuthContext';

interface SignUpControlerParams {
  setError: UseFormSetError<FieldValues>;
}

const useSignUp = ({ setError }: SignUpControlerParams) => {
  const navigate = useNavigate();
  const { setInfo } = localStorageTools();
  return useMutation({
    mutationKey: QueryKey.AUTH.signIn,
    mutationFn: ({
      email,
      password,
      nickname,
      passwordConfirmation,
    }: SignUpDto) =>
      signUp({ email, password, nickname, passwordConfirmation }),
    onSuccess: (data) => {
      if (data) {
        if ('user' in data) {
          setInfo(StorageNameOfUserInfo, data);
          navigate('/login');
        } else {
          if (data.details) {
            Object.entries(data.details).forEach(([name, { message }]) => {
              setError(name, { message });
            });
          }
        }
      }
    },
    onError: (error) => {
      // modal을 통한 에러 메세지 출력 예정
      console.log(error);
    },
  });
};

export default useSignUp;
