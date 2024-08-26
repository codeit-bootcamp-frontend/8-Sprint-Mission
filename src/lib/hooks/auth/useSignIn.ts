import { FieldValues, UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { QueryKey } from 'core/config/api/queryKey';
import { signIn, SignInDto } from 'lib/api/auth';
import localStorageTools from 'lib/localStorage/localStorageTools';
import {
  AuthContext,
  StorageNameOfUserInfo,
} from 'core/config/context/AuthContext';
import { useContext } from 'react';

interface SignInControlerParams {
  setError: UseFormSetError<FieldValues>;
}

const useSignIn = ({ setError }: SignInControlerParams) => {
  const navigate = useNavigate();
  const { setInfo } = localStorageTools();
  const {
    action: { setIsLoggedIn, setUserInfo },
  } = useContext(AuthContext);
  return useMutation({
    mutationKey: QueryKey.AUTH.signIn,
    mutationFn: ({ email, password }: SignInDto) => signIn({ email, password }),
    onSuccess: (data) => {
      if (!data) return;
      if ('user' in data) {
        setInfo(StorageNameOfUserInfo, data);
        setUserInfo(data.user);
        setIsLoggedIn(true);
        navigate('/');
      } else {
        console.log(data.details);
        if (data.details) {
          Object.entries(data.details).forEach(([name, { message }]) => {
            setError(name, { message });
          });
        }
      }
    },
    onError: (error) => {
      // modal을 통한 에러 메세지 출력 예정
      console.log(error);
    },
  });
};

export default useSignIn;
