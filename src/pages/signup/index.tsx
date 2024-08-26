import React from "react";
import AuthLogoImg from "@/components/auth/AuthLogoImg";
import SimpleLogin from "@/components/auth/SimpleLogin";
import AuthRedirectionLink from "@/components/auth/AuthRedirectionLink";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <div className="mt-[24px] mx-auto w-[343px] md:mt-[48px] md:w-[640px] xl:mt-[60px]">
        <AuthLogoImg />
        <SignUpForm />
        <SimpleLogin />
        <AuthRedirectionLink descriptionText="이미 회원이신가요?" linkText="로그인" href="/login" />
      </div>
    </>
  );
}
