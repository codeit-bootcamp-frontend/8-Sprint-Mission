import Button from "@/components/ui/Button";
import NewInput from "@/components/ui/NewInput";
import AuthContainer from "@/components/layout/AuthContainer";
import { useForm } from "react-hook-form";
import { postSignUp } from "@/apis/auth";
import { useRouter } from "next/router";
import NewButton from "@/components/ui/NewButton";

interface AuthFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
}

const INITIAL_INPUTS = {
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
  passwordConfirmation: {
    type: "password",
    placeholder: "비밀번호를 한 번 더 입력해주세요",
    name: "passwordConfirmation",
    label: "비밀번호 확인",
  },
} as const;

const INIT_VALIDATOR = {
  email: {
    required: "이메일을 입력해주세요.",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "이메일 형식을 확인해주세요.",
    },
  },
  password: {
    required: "비밀번호를 입력해주세요.",
    pattern: {
      value: /^([a-zA-Z0-9!@#$%^&*]{8,})$/,
      message: "영문, 숫자, 특수기호를 사용하여 8자 이상을 입력해주세요",
    },
  },
  passwordConfirmation: {
    required: "비밀번호가 일치하지 않습니다.",
  },
  nickname: {
    required: "닉네임을 입력해주세요.",
    pattern: {
      value: /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,20}$/,
      message:
        "닉네임은 한글, 영문, 숫자만 사용 가능하며 1~10자를 입력해주세요.",
    },
  },
};

export default function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<AuthFormData>({ mode: "onTouched" });

  const router = useRouter();

  const pwRepeatValid = (data: AuthFormData) => {
    if (data.password !== data.passwordConfirmation) {
      setError("passwordConfirmation", {
        message: "비밀번호가 일치하지 않습니다.",
      });
      return false;
    }
    return true;
  };

  const onSubmit = async (data: AuthFormData) => {
    const isValidOk = pwRepeatValid(data);
    if (!isValidOk) {
      console.log("실패");
      return;
    }
    console.log(data);
    const result = await postSignUp(data);

    if (!result) {
      console.log("실패");
    } else {
      router.push("/auth/login");
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
          {...INITIAL_INPUTS.nickname}
          register={register}
          validator={INIT_VALIDATOR.nickname}
          errors={errors}
        />
        <NewInput
          {...INITIAL_INPUTS.password}
          register={register}
          validator={INIT_VALIDATOR.password}
          errors={errors}
        />
        <NewInput
          {...INITIAL_INPUTS.passwordConfirmation}
          register={register}
          validator={INIT_VALIDATOR.passwordConfirmation}
          errors={errors}
        />
        <NewButton className="rounded-[40px] w-full h-14" activeBtn={false}>
          회원가입
        </NewButton>
      </form>
    </AuthContainer>
  );
}
