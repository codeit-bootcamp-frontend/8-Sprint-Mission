import Main from "components/@shared/Layout/Main";
import { Link } from "react-router-dom";
import AuthForm from "components/Auth/AuthForm";
import logo from "assets/images/logo_pandamarket.png";
import QuickLogin from "components/Auth/QuickLogin";

interface SignUpForm {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const onSubmit = (data: SignUpForm) => {
    console.log(data); // 회원가입 데이터 처리
  };

  return (
    <Main className="flex flex-col gap-10 w-[640px] max-xl:w-[640px]">
      <Link to="/" className="flex justify-center">
        <img src={logo} alt="판다마켓 로고" />
      </Link>
      <div className="flex flex-col gap-6 text-lg text-neutral-900">
        <AuthForm onSubmit={onSubmit} isSignUp={true} />
        <QuickLogin />
        <div className="flex justify-center gap-1 font-medium text-sm">
          <span>이미 회원이신가요?</span>
          <Link to="/signIn" className="text-brand">
            로그인
          </Link>
        </div>
      </div>
    </Main>
  );
}
export default SignUp;
