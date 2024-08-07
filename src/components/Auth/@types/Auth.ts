interface LoginInitialValue {
  email: string;
  password: string;
}

interface RegisterInitialValue extends LoginInitialValue {
  nickName: string;
  passwordCheck: string;
}

type ChangeValueType = (name: string, value: string | number) => void;

interface LoginMenuProps {
  loginMsg: string;
  btnMsg: string;
  linkPath: string;
}

export type {
  LoginInitialValue,
  RegisterInitialValue,
  ChangeValueType,
  LoginMenuProps,
};
