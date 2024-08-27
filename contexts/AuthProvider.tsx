import instance from '@/lib/api';
import { SignInResponse } from '@/types/Auth';
import { UserMeResponse } from '@/types/User';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const AuthContext = createContext<{
  user: UserMeResponse | null;
  token: string | null;
  login: (params: LoginParams) => Promise<string>;
  getMe: (token: string) => Promise<void>;
}>({
  user: null,
  token: null,
  login: async () => '',
  getMe: async () => {},
});

type LoginParams = {
  email: string;
  password: string;
};

function jwtExpired(token: string | null) {
  if (!token) return null;
  const decodeToken = () => {
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  };

  const isTokenExpired = () => {
    const decoded = decodeToken();
    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp < currentTime;
  };

  return isTokenExpired();
}

async function getTokenRefresh(refreshToken: string | null) {
  const { data } = await instance.post<{
    accessToken: string;
  }>('/auth/refresh-token', {
    refreshToken,
  });
  return data.accessToken;
}

function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserMeResponse | null>(null);

  const setTokenLocalStorage = useCallback(
    ({
      accessToken,
      refreshToken,
    }: Pick<SignInResponse, 'accessToken' | 'refreshToken'>) => {
      if (!localStorage) return;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setToken(accessToken);
    },
    []
  );

  const getMe = useCallback(async (accessToken: string) => {
    const result = await instance.get<UserMeResponse>('/users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setUser(result.data);
  }, []);

  const login = useCallback(
    async ({ email, password }: LoginParams) => {
      const { data } = await instance.post<SignInResponse>('/auth/signIn', {
        email,
        password,
      });
      const { accessToken, refreshToken } = data;
      setTokenLocalStorage({ accessToken, refreshToken });
      return accessToken;
    },
    [setTokenLocalStorage]
  );

  useEffect(() => {
    const handleInit = async () => {
      const refreshToken = localStorage.getItem('refreshToken') as string;
      if (!refreshToken) return;
      let accessToken = localStorage.getItem('accessToken');
      if (!accessToken || jwtExpired(accessToken)) {
        accessToken = await getTokenRefresh(refreshToken);
        setTokenLocalStorage({ accessToken, refreshToken });
      }
      getMe(accessToken);
    };
    handleInit();
  }, [getMe, setTokenLocalStorage]);

  const value = useMemo(
    () => ({
      token,
      user,
      login,
      getMe,
    }),
    [user, login, token, getMe]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('AuthProvider 범위 안에서 사용해야합니다.');
  return context;
}

export default AuthProvider;
