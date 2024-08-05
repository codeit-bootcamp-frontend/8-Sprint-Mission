import { MouseEvent, useReducer } from "react";

import { emailValidator, pwValidator } from "#/utils";

import { Button, Input } from "#components";
import { useNavigate } from "react-router";

interface InputConfig {
  type: string;
  placeholder: string;
  name: string;
  label: string;
}

interface InputTypes {
  email: InputConfig;
  password: InputConfig;
}

interface State {
  emailValue: string;
  pwValue: string;
  emailValidate: boolean;
  pwValidate: boolean;
}

interface Action {
  type: string;
  emailValue?: string;
  pwValue?: string;
  emailValidate?: boolean;
  pwValidate?: boolean;
}

const INITIAL_INPUTS: InputTypes = {
  email: {
    type: "input",
    placeholder: "이메일을 입력해주세요",
    name: "email",
    label: "이메일",
  },
  password: {
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    name: "password",
    label: "비밀번호",
  },
};

const INITIAL_STATE = {
  emailValue: "",
  pwValue: "",
  emailValidate: false,
  pwValidate: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHANGE_EMAIL_VALUE":
      const emailValue = action.emailValue || "";
      return {
        ...state,
        emailValue,
        emailValidate: emailValidator(emailValue) ? true : false,
      };
    case "CHANGE_PW_VALUE":
      const pwValue = action.pwValue || "";
      return {
        ...state,
        pwValue,
        pwValidate: pwValidator(pwValue) ? true : false,
      };
    default:
      return state;
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const onChangeInput = (name: string, value: string): void => {
    switch (name) {
      case "email":
        dispatch({
          type: "CHANGE_EMAIL_VALUE",
          emailValue: value,
        });
        emailValidator(value);
        break;
      case "password":
        dispatch({
          type: "CHANGE_PW_VALUE",
          pwValue: value,
        });
        break;
      default:
        break;
    }
  };
  const navigate = useNavigate();
  const onSubmitButton = (e: MouseEvent, validateOk: boolean): void => {
    e.preventDefault();
    if (validateOk) {
      navigate("/items");
    }
  };
  return (
    <form className="w-full">
      <Input
        {...INITIAL_INPUTS.email}
        onChange={onChangeInput}
        value={state.emailValue}
      />
      <Input
        {...INITIAL_INPUTS.password}
        onChange={onChangeInput}
        value={state.pwValue}
      />
      <Button
        activeBtn={state.emailValidate && state.pwValidate}
        onClick={onSubmitButton}
      >
        로그인
      </Button>
    </form>
  );
}
