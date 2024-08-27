import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import NewInput from "@/components/ui/NewInput";
import AuthContainer from "@/components/layout/AuthContainer";
import { postSignIn } from "@/apis/auth";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  UserContext,
  UserContextInterface,
  UserProvider,
} from "@/context/userProvider";
import NewButton from "@/components/ui/NewButton";

interface AuthFormData {
  email: string;
  password: string;
}
const INITIAL_INPUTS = {
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
} as const;

const INIT_VALIDATOR = {
  email: {
    required: "이메일을 입력해주세요.",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "올바르지 않은 이메일 형식입니다.",
    },
  },
  password: {
    required: "비밀번호를 입력해주세요.",
    minLength: {
      value: 8,
      message: "비밀번호를 확인해주세요",
    },
  },
};

export default function Login() {
  const [isLoginFail, setIsLoginFail] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthFormData>({ mode: "onTouched" });
  const { setUser } = useContext(UserContext) as UserContextInterface;

  const router = useRouter();
  const onSubmit = async (data: AuthFormData) => {
    const response = await postSignIn(data);

    if (!response) {
      setIsLoginFail(true);
      return;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      setUser(response.user);
      router.push("/");
      return;
    }
  };
  return (
    <AuthContainer>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <NewInput
          {...INITIAL_INPUTS.email}
          register={register}
          validator={INIT_VALIDATOR.email}
          errors={errors}
        />
        <NewInput
          {...INITIAL_INPUTS.password}
          register={register}
          validator={INIT_VALIDATOR.password}
          errors={errors}
        />
        {isLoginFail && (
          <div className="text-my-error-red flex-center">
            로그인 정보를 확인해주세요
          </div>
        )}
        <NewButton className="rounded-[40px] w-full h-14" activeBtn={false}>
          로그인
        </NewButton>
      </form>
    </AuthContainer>
  );
}
