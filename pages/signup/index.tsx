import { ReactElement, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import instance from "@/lib/instance";
import { API_PATH } from "@/lib/path";
import { FormValues } from "@/types/formValues";
import { match } from "ts-pattern";

import Layout from "@/components/Layout";
import BigLogo from "@/components/BigLogo";
import FormButton from "@/components/Buttons/FormButton";
import EasyLogin from "@/components/EasyLogin/EasyLogin";

import Image from "next/image";
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
    name: "passwordConfirmation",
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
  const passwordConfirmation = watch("passwordConfirmation");

  const isFormCompleted = email && nickname && password && passwordConfirmation;
  // TODO: ts-pattern 적용?
  // const isFormCompleted = match({ email, nickname, password, passwordConfirmation })
  //   .with({email:String, nickname: String, password: String, passwordConfirmation: String }, () => true)
  //   .otherwise(() => false));
  const isPasswordValid = password === passwordConfirmation;
  const isButtonDisabled = !isFormCompleted || !isPasswordValid || isSubmitting;

  const types = ["password", "text"];
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordShowButtonClick = () => {
    setIsPasswordShow((prev) => !prev);
  };
  const [isPasswordConfirmationShow, setIsPasswordConfirmationShow] =
    useState(false);
  const handlePasswordConfirmationShowButtonClick = () => {
    setIsPasswordConfirmationShow((prev) => !prev);
  };

  const currentPassword = useRef<string>();
  currentPassword.current = watch("password");

  const router = useRouter();
  const isSignedUp = !!localStorage.getItem("accessToken");
  if (isSignedUp) {
    // TODO: toast 메시지 - 회원가입 내역 존재
    router.push(`/login`);
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await instance.post(API_PATH.signUp(), data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = response.data ?? [];

      if (userData.accessToken && userData.refreshToken) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(userData.accessToken),
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(userData.refreshToken),
        );
      }
      // TODO: toast 메시지 - 회원가입 완료
      router.push(`/login`);
    } catch (error) {
      console.error("회원가입 중 오류가 발생했습니다: ", error);
    }
  };

  return (
    <>
      <Head>
        <title>판다마켓 - 회원가입</title>
      </Head>
      <Layout>
        <main className="m-auto max-w-[40rem]">
          <header className="mb-10">
            <BigLogo />
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
              <div className="relative w-full">
                <input
                  className="w-full rounded-xl bg-gray-100 px-6 py-4"
                  id="password"
                  type={!isPasswordShow ? types[0] : types[1]}
                  placeholder="비밀번호를 입력해주세요"
                  {...register("password", { required: true, minLength: 8 })}
                  autoComplete="current-password"
                />
                <button
                  className="absolute right-6 top-4"
                  type="button"
                  value="비밀번호 보이거나 가리기"
                  onClick={handlePasswordShowButtonClick}
                >
                  <Image
                    src={isPasswordShow ? passwordShowIcon : passwordHideIcon}
                    alt="비밀번호를 보여주는 눈 모양 아이콘"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
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
                htmlFor="passwordConfirmation"
              >
                비밀번호 확인
              </label>
              <div className="relative w-full">
                <input
                  className="w-full rounded-xl bg-gray-100 px-6 py-4"
                  id="passwordConfirmation"
                  type={!isPasswordConfirmationShow ? types[0] : types[1]}
                  placeholder="비밀번호를 다시 한 번 입력해주세요"
                  {...register("passwordConfirmation", {
                    required: true,
                    validate: (value) => value === currentPassword.current,
                  })}
                  autoComplete="new-password"
                />
                <button
                  className="absolute right-6 top-4"
                  type="button"
                  value="비밀번호 보이거나 가리기"
                  onClick={handlePasswordConfirmationShowButtonClick}
                >
                  <Image
                    src={
                      isPasswordConfirmationShow
                        ? passwordShowIcon
                        : passwordHideIcon
                    }
                    alt="비밀번호를 보여주는 눈 모양 아이콘"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              {errors.passwordConfirmation &&
                errors.passwordConfirmation.type === "validate" && (
                  <p>비밀번호가 일치하지 않습니다</p>
                )}
            </div>

            <FormButton isButtonDisabled={isButtonDisabled} text="회원가입" />
          </form>

          <EasyLogin />

          <div className="text-center font-medium text-gray-800">
            이미 회원이신가요?&nbsp;
            <Link
              className="font-medium text-brand-blue underline"
              href="/login/"
            >
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
