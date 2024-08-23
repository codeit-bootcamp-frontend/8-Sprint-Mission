import Main from "components/@shared/Layout/Main";
import { Link } from "react-router-dom";
import AuthForm from "components/Auth/AuthForm";
import QuickLogin from "components/Auth/QuickLogin";
import { AuthSignUp, AuthSignIn } from "core/dtos/authDTO";
import HomeLogo from "components/@shared/UI/HomeLogo";

function SignUp() {
  const onSubmit = (data: AuthSignUp | AuthSignIn) => {};

  return (
    <Main className="flex flex-col gap-10 w-[640px] max-xl:w-[640px]">
      <HomeLogo />
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
