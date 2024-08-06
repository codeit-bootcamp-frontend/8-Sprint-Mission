export interface InitialValue {
  email: string;
  password: string;
}

export interface RegisterInitialValue extends InitialValue {
  nickName: string;
  passwordCheck: string;
}

export type ChangeValueType = (name: string, value: string | number) => void;
