import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/assets/images/ic_google.png";
import kakaoIcon from "@/assets/images/ic_kakao.png";

function EasyLogin() {
  return (
    <div className="mb-6 mt-6 flex items-center justify-between rounded-lg bg-[#E6F2FF] px-6 py-4 text-base font-medium text-gray-800">
      간편 로그인하기
      <div className="flex items-center justify-center gap-4">
        <Link href="https://www.google.com/">
          <Image src={googleIcon} alt="구글 아이콘" width={42} height={42} />
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <Image src={kakaoIcon} alt="카카오톡 아이콘" width={42} height={42} />
        </Link>
      </div>
    </div>
  );
}

export default EasyLogin;
