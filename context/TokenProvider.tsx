import { postSignIn } from "@/apis/signIn";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react";

export interface Token {
  accessToken: string;
  refreshToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  requestToken: () => void;
}

const tempAuth = {
  email: "kimse418@codeit.com",
  password: "12341234",
};

export const TokenContext = createContext<Token | null>(null);

const TokenProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const requestToken = async () => {
    const res = await postSignIn(tempAuth);
    const newAccessToken = res.accessToken;
    const newRefreshToken = res.refreshToken;
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
  };
  const value = useMemo(() => {
    return { accessToken, refreshToken, setAccessToken, requestToken };
  }, [accessToken]);

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};

export default TokenProvider;
