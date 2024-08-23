import { UserInfo } from 'lib/api/types';
import localStorageTools from 'lib/localStorage/localStorageTools';
import { createContext, useEffect, useState } from 'react';
import { NonUndefined } from 'react-hook-form';

interface AuthContextType {
  state: {
    userInfo: UserInfo['user'] | null;
    isLoggedin: boolean;
  };
  action: {
    setUserInfo: (newValue: NonUndefined<UserInfo['user']>) => void;
    setIsLoggedIn: (newState: boolean) => void;
  };
}

const INITIAL_AUTH_CONTEXT = {
  state: {
    userInfo: null,
    isLoggedin: false,
  },
  action: {
    setUserInfo: () => {},
    setIsLoggedIn: () => {},
  },
};

export const AuthContext = createContext<AuthContextType>(INITIAL_AUTH_CONTEXT);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const StorageNameOfUserInfo = 'userInformation';

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedin, setIsLoggedined] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo['user'] | null>(null);

  const handleUserInfo = (newInfo: NonUndefined<UserInfo['user']>) => {
    setUserInfo((prev) => ({ ...prev, ...newInfo }));
  };

  const handleIsLoggedIn = (newState: boolean) => {
    setIsLoggedined(newState);
  };

  const providerValue: AuthContextType = {
    state: {
      userInfo: userInfo,
      isLoggedin: isLoggedin,
    },
    action: {
      setUserInfo: handleUserInfo,
      setIsLoggedIn: handleIsLoggedIn,
    },
  };

  useEffect(() => {
    const { getInfo } = localStorageTools();
    const userInfo = getInfo(StorageNameOfUserInfo);
    if (userInfo) {
      setUserInfo(userInfo.user);
      setIsLoggedined(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
