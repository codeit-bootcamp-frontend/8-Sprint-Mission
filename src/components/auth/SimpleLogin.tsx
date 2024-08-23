import Link from "next/link";
import Image from "next/image";

export default function SimpleLogin() {
  return (
    <div className="flex px-[24px] py-[16px] mt-[24px] mb-[24px] justify-between items-center bg-blue-login rounded-[8px] height-[74px]">
      <p className="font-medium text-[16px] text-gray-800">간편 로그인하기</p>
      <div className="flex gap-[16px]">
        <Link href="https://www.google.com">
          <Image width={42} height={42} src="/images/ic_google_login.png" alt="구글로그인" />
        </Link>
        <Link href="https://www.kakao.com">
          <Image width={42} height={42} src="/images/ic_kakao_login.png" alt="카카오로그인" />
        </Link>
      </div>
    </div>
  );
}
