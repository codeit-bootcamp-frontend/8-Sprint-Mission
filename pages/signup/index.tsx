import { ReactElement, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Head from "next/head";
import { FormValues } from "@/types/formValues";
import Layout from "@/components/Layout";
import EasyLogin from "@/components/EasyLogin/EasyLogin";

import Image from "next/image";
import logoIcon from "@/assets/images/ic_logo_icon.png";
import logoText from "@/assets/images/ic_logo_text.png";
import passwordHideIcon from "@/assets/images/ic_password_hide.png";
import passwordShowIcon from "@/assets/images/ic_password_show.png";

const VALID_EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const INPUT_CONTENT = [
  {
    name: "email",
    label: "이메일",
    type: "email",
    placeholder: "이메일을 입력해주세요",
  },
  {
    name: "nickname",
    label: "닉네임",
    type: "text",
    placeholder: "닉네임을 입력해주세요",
  },
  {
    name: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
  },
  {
    name: "passwordCheck",
    label: "비밀번호 확인",
    type: "password",
    placeholder: "비밀번호를 다시 한 번 입력해주세요",
  },
];

function SignUp() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const email = watch("email");
  const nickname = watch("nickname");
  const password = watch("password");
  const passwordCheck = watch("passwordCheck");

  const isFormCompleted = email && nickname && password && passwordCheck;
  const isPasswordValid = password === passwordCheck;
  const isButtonDisabled = !isFormCompleted || !isPasswordValid || isSubmitting;

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordShowButtonClick = () => {
    setIsPasswordShow((prevIsPasswordShow) => !prevIsPasswordShow);
  };

  const [isPasswordCheckShow, setIsPasswordCheckShow] = useState(false);
  const handlePasswordCheckShowButtonClick = () => {
    setIsPasswordCheckShow(
      (prevIsPasswordCheckShow) => !prevIsPasswordCheckShow,
    );
  };

  const currentPassword = useRef<string>();
  currentPassword.current = watch("password");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>판다마켓 - 회원가입</title>
      </Head>
      <Layout>
        <main>
          <header>
            <Link className="flex items-center justify-center gap-6" href="/">
              <Image
                className="logo-img"
                src={logoIcon}
                alt="판다마켓 로고 이미지"
                width={104}
                height={104}
              />
              <Image
                className="logo-img"
                src={logoText}
                alt="판다마켓 로고 이미지"
                width={266}
                height={90}
              />
            </Link>
          </header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6 flex flex-col items-start justify-start">
              <label
                className="mb-3 text-lg font-bold text-gray-800"
                htmlFor="email"
              >
                이메일
              </label>
              <input
                className="w-full rounded-xl bg-gray-100 px-6 py-4"
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                {...register("email", {
                  required: true,
                  pattern: VALID_EMAIL_PATTERN,
                })}
                autoComplete="email"
              />
              {errors.email && errors.email.type === "required" && (
                <p>이메일을 입력해주세요</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p>잘못된 이메일 형식입니다</p>
              )}
            </div>

            <div className="mb-6 flex flex-col items-start justify-start">
              <label
                className="mb-3 text-lg font-bold text-gray-800"
                htmlFor="nickname"
              >
                닉네임
              </label>
              <input
                className="w-full rounded-xl bg-gray-100 px-6 py-4"
                id="nickname"
                type="text"
                placeholder="닉네임을 입력해주세요"
                {...register("nickname", {
                  required: true,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p>닉네임을 입력해주세요</p>
              )}
            </div>

            <div className="mb-6 flex flex-col items-start justify-start">
              <label
                className="mb-3 text-lg font-bold text-gray-800"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                className="w-full rounded-xl bg-gray-100 px-6 py-4"
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...register("password", { required: true, minLength: 8 })}
                autoComplete="current-password"
              />
              <button
                className="password-show-btn"
                type="button"
                value="비밀번호 보이거나 가리기"
                onClick={handlePasswordShowButtonClick}
              >
                <Image
                  className="password-show-icon"
                  src={isPasswordShow ? passwordShowIcon : passwordHideIcon}
                  alt="비밀번호를 보여주는 눈 모양 아이콘"
                  width={24}
                  height={24}
                />
              </button>
              {errors.password && errors.password.type === "required" && (
                <p>비밀번호를 입력해주세요</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p>비밀번호를 8자 이상 입력해주세요</p>
              )}
            </div>

            <div className="mb-6 flex flex-col items-start justify-start">
              <label
                className="mb-3 text-lg font-bold text-gray-800"
                htmlFor="passwordCheck"
              >
                비밀번호 확인
              </label>
              <input
                className="w-full rounded-xl bg-gray-100 px-6 py-4"
                id="passwordCheck"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                {...register("passwordCheck", {
                  required: true,
                  validate: (value) => value === currentPassword.current,
                })}
                autoComplete="new-password"
              />
              <button
                className="password-show-btn"
                type="button"
                value="비밀번호 보이거나 가리기"
                onClick={handlePasswordCheckShowButtonClick}
              >
                <Image
                  className="password-show-icon"
                  src={
                    isPasswordCheckShow ? passwordShowIcon : passwordHideIcon
                  }
                  alt="비밀번호를 보여주는 눈 모양 아이콘"
                  width={24}
                  height={24}
                />
              </button>
              {errors.passwordCheck &&
                errors.passwordCheck.type === "validate" && (
                  <p>비밀번호가 일치하지 않습니다</p>
                )}
            </div>

            <button
              className="form-login-btn"
              type="submit"
              value="로그인"
              disabled={isSubmitting}
            >
              로그인
            </button>
          </form>

          <button
            className="bg-brand-blue disabled:bg-gray-400"
            type="button"
            value="회원가입"
            disabled={isButtonDisabled}
          >
            회원가입
          </button>

          <EasyLogin />

          <div className="login">
            이미 회원이신가요?
            <Link className="login-link" href="/login/">
              로그인
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
