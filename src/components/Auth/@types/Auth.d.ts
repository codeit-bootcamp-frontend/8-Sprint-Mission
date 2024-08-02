interface InitialValue {
  email: string;
  password: string;
}

type ChangeValueType = (name: string, value: string | number) => void;
