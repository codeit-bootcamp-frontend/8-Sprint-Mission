import Main from "components/@shared/Layout/Main";
import { Link } from "react-router-dom";
import AuthForm from "components/Auth/AuthForm";
import HomeLogo from "components/@shared/UI/HomeLogo";
import QuickLogin from "components/Auth/QuickLogin";
import { AuthSignIn } from "core/dtos/authDTO";

function SignIn() {
  const onSubmit = (data: AuthSignIn) => {
    console.log("로그인 폼 데이터", data);
  };

  return (
    <Main className="flex flex-col gap-10 w-[640px] max-xl:w-[640px]">
      <HomeLogo />
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
