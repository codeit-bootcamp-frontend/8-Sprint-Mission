import Link from "next/link";
import Image from "next/image";
import logoIcon from "@/assets/images/ic_logo_icon.png";
import logoText from "@/assets/images/ic_logo_text.png";

function BigLogo() {
  return (
    <Link className="flex items-center justify-center gap-6" href="/">
      <Image
        src={logoIcon}
        alt="판다마켓 로고 이미지"
        width={104}
        height={104}
      />
      <Image
        src={logoText}
        alt="판다마켓 로고 이미지"
        width={266}
        height={90}
      />
    </Link>
  );
}

export default BigLogo;
