import { ReactElement, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import EasyLogin from "@/components/EasyLogin/EasyLogin";
import TextInput from "@/components/Inputs/TextInput";

import Image from "next/image";
import logoIcon from "@/assets/images/ic_logo_icon.png";
import logoText from "@/assets/images/ic_logo_text.png";
import passwordHideIcon from "@/assets/images/ic_password_hide.png";
import passwordShowIcon from "@/assets/images/ic_password_show.png";

const INPUT_CONTENT = [
  {
    name: "email",
    label: "이메일",
    type: "email",
    placeholder: "이메일을 입력해주세요",
  },
  {
    name: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
  },
];

function Login() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordShowButtonClick = () => {
    setIsPasswordShow((prevIsPasswordShow) => !prevIsPasswordShow);
  };

  const [formValues, setFormValues] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  // const [isFormComplete, setIsFormComplete] = useState(false);
  const handleValueChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // setIsFormComplete(value.trim() !== "");
  };

  return (
    <>
      <Head>
        <title>판다마켓 - 로그인</title>
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

          <form action="">
            {/* <div className="form-content">
                <label htmlFor="email">이메일</label>
                <input
                  id="input-email"
                  type="email"
                  name="email"
                  placeholder="이메일을 입력해주세요"
                />
                <div className="error-message email"></div>
              </div>

              <div className="form-content">
                <label htmlFor="password">비밀번호</label>
                <div className="password">
                  <input
                    id="input-password"
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력해주세요"
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
                </div>
                <div className="error-message password"></div>
              </div> */}

            {INPUT_CONTENT.map((content, index) => {
              return (
                <TextInput
                  key={index}
                  content={content}
                  onChange={handleValueChange}
                />
              );
            })}

            <button className="form-login-btn" type="button" value="로그인">
              로그인
            </button>
          </form>

          <EasyLogin />

          <div className="signup">
            판다마켓이 처음이신가요?
            <Link className="signup-link" href="/signup/">
              회원가입
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
