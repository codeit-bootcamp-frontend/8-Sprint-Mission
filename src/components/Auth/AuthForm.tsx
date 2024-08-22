import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "components/@shared/UI/form/Form";
import AuthInput from "./UI/AuthInput";
import FormButton from "components/@shared/UI/form/FormButton";
import VisibilityToggle from "./UI/VisibilityToggle";

interface AuthFormProps {
  onSubmit: (data: any) => void;
  isSignUp?: boolean; // 회원가입 여부
}

function AuthForm({ onSubmit, isSignUp }: AuthFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        id="email"
        type="text"
        placeholder="이메일을 입력해주세요"
        label="이메일"
        register={register}
        errors={errors.email}
        validation={{
          required: "이메일 주소를 입력해주세요.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "유효한 이메일 주소를 입력해주세요.",
          },
        }}
      />
      {isSignUp && (
        <AuthInput
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          label="닉네임"
          register={register}
          errors={errors.nickname}
          validation={{ required: "닉네임을 입력해주세요." }}
        />
      )}
      <div className="relative">
        <AuthInput
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요"
          label="비밀번호"
          register={register}
          errors={errors.password}
          validation={{
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 6,
              message: "비밀번호는 최소 6자 이상이어야 합니다.",
            },
          }}
        />
        <VisibilityToggle onToggle={setIsPasswordVisible} />
      </div>
      {isSignUp && (
        <div className="relative">
          <AuthInput
            id="confirmPassword"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="비밀번호를 다시 입력해주세요"
            label="비밀번호 확인"
            register={register}
            errors={errors.confirmPassword}
            validation={{
              required: "비밀번호를 다시 입력해주세요.",
              validate: (value: string) =>
                value === watch("password") || "비밀번호가 일치하지 않습니다.",
            }}
          />
          <VisibilityToggle onToggle={setIsPasswordVisible} />
        </div>
      )}
      <FormButton
        buttonText={isSignUp ? "회원가입" : "로그인"}
        isFormValid={isValid}
        className="rounded-[40px] py-4"
      />
    </Form>
  );
}

export default AuthForm;
