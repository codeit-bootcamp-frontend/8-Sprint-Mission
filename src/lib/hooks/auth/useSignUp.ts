import { addUser } from '@lib/api/AuthApi';
import { useAuthStore } from '@store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { AddUserRequest } from '@type/AuthTypes';

const useSignUp = () => {
  const { setUser, setAccessToken, setRefreshToken } = useAuthStore();

  const { mutate: signUp, ...returns } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async ({ ...params }: AddUserRequest) => {
      return await addUser(params);
    },
    onSuccess: (res, req, context) => {
      console.log('useSignUp mutation success: ', res, req, context);
      if (res) {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
      }
    },
    gcTime: 0,
  });

  return { signUp, ...returns };
};

export default useSignUp;
