import Image from "next/image";

export default function AuthLogoImg() {
  return (
    <div className="relative my-0 mx-auto w-[198px] h-[66px] md:w-[396px] md:h-[132px]">
      <Image fill src="/images/panda_logo_with_typo.png" alt="로고 이미지" />
    </div>
  );
}
