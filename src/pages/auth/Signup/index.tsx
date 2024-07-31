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
  nickname: InputConfig;
  password: InputConfig;
  passwordRepeat: InputConfig;
}

interface State {
  emailValue: string;
  nicknameValue: string;
  pwValue: string;
  pwRepeatValue: string;
  emailValidate: boolean;
  nicknameValidate: boolean;
  pwValidate: boolean;
  pwRepeatValidate: boolean;
}

interface Action {
  type: string;
  emailValue?: string;
  nicknameValue?: string;
  pwValue?: string;
  pwRepeatValue?: string;
  emailValidate?: boolean;
  nicknameValidate?: boolean;
  pwValidate?: boolean;
  pwRepeatValidate?: boolean;
}

const INITIAL_INPUTS: InputTypes = {
  email: {
    type: "input",
    placeholder: "이메일을 입력해주세요",
    name: "email",
    label: "이메일",
  },
  nickname: {
    type: "input",
    placeholder: "닉네임을 입력해주세요",
    name: "nickname",
    label: "닉네임",
  },
  password: {
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    name: "password",
    label: "비밀번호",
  },
  passwordRepeat: {
    type: "password",
    placeholder: "비밀번호를 다시 한 번 입력해주세요",
    name: "password-repeat",
    label: "비밀번호 확인",
  },
};

const INITIAL_STATE = {
  emailValue: "",
  nicknameValue: "",
  pwValue: "",
  pwRepeatValue: "",
  emailValidate: false,
  nicknameValidate: false,
  pwValidate: false,
  pwRepeatValidate: false,
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
    case "CHANGE_NICKNAME_VALUE":
      const nicknameValue = action.nicknameValue || "";
      return {
        ...state,
        nicknameValue,
        nicknameValidate: nicknameValue.length > 3 ? true : false,
      };
    case "CHANGE_PW_VALUE":
      const pwValue = action.pwValue || "";
      return {
        ...state,
        pwValue,
        pwValidate: pwValidator(pwValue) ? true : false,
        pwRepeatValidate: pwValue === state.pwRepeatValue ? true : false,
      };
    case "CHANGE_PW_REPEAT_VALUE":
      const pwRepeatValue = action.pwRepeatValue || "";
      return {
        ...state,
        pwRepeatValue,
        pwRepeatValidate: state.pwValue === pwRepeatValue ? true : false,
      };
    default:
      return state;
  }
};

export default function Signup() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const onChangeInput = (name: string, value: string): void => {
    switch (name) {
      case "email":
        dispatch({
          type: "CHANGE_EMAIL_VALUE",
          emailValue: value,
        });
        break;
      case "nickname":
        dispatch({
          type: "CHANGE_NICKNAME_VALUE",
          nicknameValue: value,
        });
        break;
      case "password":
        dispatch({
          type: "CHANGE_PW_VALUE",
          pwValue: value,
        });
        break;
      case "password-repeat":
        dispatch({
          type: "CHANGE_PW_REPEAT_VALUE",
          pwRepeatValue: value,
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
        {...INITIAL_INPUTS.nickname}
        onChange={onChangeInput}
        value={state.nicknameValue}
      />
      <Input
        {...INITIAL_INPUTS.password}
        onChange={onChangeInput}
        value={state.pwValue}
      />
      <Input
        {...INITIAL_INPUTS.passwordRepeat}
        onChange={onChangeInput}
        value={state.pwRepeatValue}
      />
      <Button
        activeBtn={state.emailValidate && state.pwValidate}
        onClick={onSubmitButton}
      >
        회원가입
      </Button>
    </form>
  );
}
