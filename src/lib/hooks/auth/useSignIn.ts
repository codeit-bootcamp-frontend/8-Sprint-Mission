import { FieldValues, UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { QueryKey } from 'core/config/api/queryKey';
import { signIn, SignInDto } from 'lib/api/auth';
import localStorageTools from 'lib/localStorage/localStorage';
import { StorageNameOfUserInfo } from 'core/config/context/AuthContext';

interface SignInControlerParams {
  setError: UseFormSetError<FieldValues>;
}

const useSignIn = ({ setError }: SignInControlerParams) => {
  const navigate = useNavigate();
  const { setInfo } = localStorageTools();
  return useMutation({
    mutationKey: QueryKey.AUTH.signIn,
    mutationFn: ({ email, password }: SignInDto) => signIn({ email, password }),
    onSuccess: (data) => {
      if (!data) return;
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
    },
    onError: (error) => {
      // modal을 통한 에러 메세지 출력 예정
      console.log(error);
    },
  });
};

export default useSignIn;
