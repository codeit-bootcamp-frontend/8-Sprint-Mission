import AuthLogoImg from "@/components/auth/AuthLogoImg";
import LoginForm from "@/components/auth/LoginForm";
import SimpleLogin from "@/components/auth/SimpleLogin";
import AuthRedirectionLink from "@/components/auth/AuthRedirectionLink";

export default function LogIn() {
  return (
    <>
      <div className="mt-[80px] mx-auto w-[343px] md:mt-[190px] md:w-[640px] xl:mt-[231px]">
        <AuthLogoImg />
        <LoginForm />
        <SimpleLogin />
        <AuthRedirectionLink
          descriptionText="판다마켓이 처음이신가요?"
          linkText="회원가입"
          href="/signup"
        />
      </div>
    </>
  );
}
