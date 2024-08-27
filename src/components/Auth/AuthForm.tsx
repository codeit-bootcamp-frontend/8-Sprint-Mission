import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "components/@shared/UI/form/Form";
import AuthInput from "./UI/AuthInput";
import FormButton from "components/@shared/UI/form/FormButton";
import VisibilityToggle from "./UI/VisibilityToggle";
import { BASE_URL, postToApi } from "core/api/apiService";
import useApiPost from "lib/hooks/useApiPost";
import { AuthSignIn, AuthSignUp, AuthResponse } from "core/dtos/authDTO";
import { INITIAL_AUTH_RESPONSE } from "core/constants/initialValues";

interface AuthFormProps {
  onSubmit: (data: AuthSignUp | AuthSignIn) => void;
  isSignUp?: boolean;
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

  const navigate = useNavigate();

  const handleAuthSuccess = (result: AuthResponse) => {
    if (isSignUp) {
      console.log("회원가입 성공:", result);
      navigate("/signIn");
    } else {
      console.log("로그인 성공:", result);
      localStorage.setItem("accessToken", result.accessToken);
      navigate("/");
    }
  };

  const { postData } = useApiPost(
    postToApi,
    `${BASE_URL}/auth/${isSignUp ? "signUp" : "signIn"}`,
    INITIAL_AUTH_RESPONSE,
    handleAuthSuccess
  );

  const handleFormSubmit = async (data: any) => {
    await postData(data);
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
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
          validation={{
            required: "닉네임을 입력해주세요.",
            maxLength: {
              value: 20,
              message: "닉네임은 20자를 초과할 수 없습니다.",
            },
          }}
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
              value: 8,
              message: "비밀번호는 최소 8자 이상이어야 합니다.",
            },
          }}
        />
        <VisibilityToggle onToggle={setIsPasswordVisible} />
      </div>
      {isSignUp && (
        <div className="relative">
          <AuthInput
            id="passwordConfirmation"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="비밀번호를 다시 입력해주세요"
            label="비밀번호 확인"
            register={register}
            errors={errors.passwordConfirmation}
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
