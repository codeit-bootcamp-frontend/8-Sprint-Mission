import { postSignIn } from "@/apis/signIn";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react";

export interface Context {
  accessToken: string;
  refreshToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  onClickSignIn: () => void;
}

const tempAuth = {
  email: "kimse418@codeit.com",
  password: "12341234",
};

export const TokenContext = createContext<Context | null>(null);

const TokenProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const onClickSignIn = async () => {
    const res = await postSignIn(tempAuth);
    const newAccessToken = res.accessToken;
    const newRefreshToken = res.refreshToken;
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
  };
  const value = useMemo(() => {
    return { accessToken, refreshToken, setAccessToken, onClickSignIn };
  }, [accessToken]);

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};

export default TokenProvider;
