import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";
import SimpleLogin from "@/components/auth/SimpleLogin";

export default function LogIn() {
  return (
    <>
      <div className="mt-[80px] mx-auto w-[343px] md:mt-[190px] md:w-[640px] xl:mt-[231px]">
        <div className="relative my-0 mx-auto w-[198px] h-[66px] md:w-[396px] md:h-[132px]">
          <Image fill src="/images/panda_logo_with_typo.png" alt="로고 이미지" />
        </div>
        <LoginForm />
        <SimpleLogin />
        <div className="flex justify-center gap-[4px] text-[14px] font-medium text-gray-800">
          <p>판다마켓이 처음이신가요?</p>
          <Link className="underline text-brand-blue" href="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
}
