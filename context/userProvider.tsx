import { getMe } from "@/apis/user";
import axios from "@/lib/axios";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useEffect,
} from "react";

interface UserInterface {
  updatedAt: string;
  createdAt: string;
  image: string[] | null;
  nickname: string;
  id: string;
  email: string;
}

export interface UserContextInterface {
  user: UserInterface | null;
  setUser: Dispatch<SetStateAction<UserInterface | null>>;
}

export const UserContext = createContext<UserContextInterface | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    const resetUser = async () => {
      const me = await getMe();
      setUser(me);
    };
    resetUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
