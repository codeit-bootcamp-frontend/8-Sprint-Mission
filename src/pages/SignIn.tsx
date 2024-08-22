import Main from "components/@shared/Layout/Main";
import { Link } from "react-router-dom";
import AuthForm from "components/Auth/AuthForm";
import logo from "assets/images/logo_pandamarket.png";
import QuickLogin from "components/Auth/QuickLogin";

interface SignInForm {
  email: string;
  password: string;
}

function SignIn() {
  const onSubmit = (data: SignInForm) => {
    console.log(data);
  };

  return (
    <Main className="flex flex-col gap-10 w-[640px] max-xl:w-[640px]">
      <Link to="/" className="flex justify-center">
        <img src={logo} alt="판다마켓 로고" />
      </Link>
      <div className="flex flex-col gap-6 text-lg text-neutral-900">
        <AuthForm onSubmit={onSubmit} isSignUp={false} />
        <QuickLogin />
        <div className="flex justify-center gap-1 font-medium text-sm">
          <span>판다마켓이 처음이신가요?</span>
          <Link to="/signUp" className="text-brand">
            회원가입
          </Link>
        </div>
      </div>
    </Main>
  );
}

export default SignIn;
