import { signInUser } from '@lib/api/AuthApi';
import { useAuthStore } from '@store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { SignInUserRequest } from '@type/AuthTypes';

const useLogin = () => {
  const { setUser, setAccessToken, setRefreshToken } = useAuthStore();
  const { mutate: login, ...returns } = useMutation({
    mutationFn: async ({ ...params }: SignInUserRequest) => {
      return await signInUser(params);
    },
    onSuccess: (res, req, context) => {
      console.log('useLogin mutation success: ', res, req, context);
      if (res) {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
      }
    },
  });

  return { login, ...returns };
};

export default useLogin;
