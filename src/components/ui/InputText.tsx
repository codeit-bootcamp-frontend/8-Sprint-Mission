import { InputTextType } from "@/types/inputType";
import ViewIcon from "../../../public/images/i-view-no.png";
import ViewIconOn from "../../../public/images/i-view.png";
import Image from "next/image";
import { useState } from "react";

interface InputTextProps {
  content: InputTextType;
  value: string;
  type?: string;
  setType?: React.Dispatch<React.SetStateAction<string>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputText({
  content,
  type = "text",
  setType,
  value,
  setInputText,
}: InputTextProps) {
  const [passwordView, setPasswordView] = useState<boolean>(false);

  const handlePasswordView = () => {
    setPasswordView(!passwordView);

    if (type === "password" && setType) {
      setType("text");
    } else if (setType) {
      setType("password");
    }
  };

  return (
    <div className="mb-[24px]">
      <label
        className="block text-[18px] font-bold mb-[12px]"
        htmlFor={content.id}
      >
        {content.label}
      </label>
      <span className="relative">
        <input
          className="w-full h-[56px] text-[16px] rounded-[12px] px-[24px] bg-gray-100"
          id={content.id}
          type={type}
          value={value}
          placeholder={content.placeholder}
          onChange={(e) => setInputText(e.target.value)}
        />
        {content.isViewButton && (
          <button
            className="absolute top-[50%] right-[24px] translate-y-[-50%]"
            onClick={() => {
              handlePasswordView();
            }}
          >
            <Image
              width={24}
              height={24}
              src={passwordView ? ViewIconOn : ViewIcon}
              alt="비밀번호 보기 아이콘"
            />
          </button>
        )}
      </span>
    </div>
  );
}
