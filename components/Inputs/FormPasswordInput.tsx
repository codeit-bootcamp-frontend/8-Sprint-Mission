import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import Image from "next/image";
import passwordHideIcon from "@/assets/images/ic_password_hide.png";
import passwordShowIcon from "@/assets/images/ic_password_show.png";

interface Content {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
}

interface FormPasswordInputProps {
  content: Content;
  register: UseFormRegister<Record<string, any>>;
}

function FormPasswordInput({ content, register }: FormPasswordInputProps) {
  const { name, label, placeholder } = content;

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordShowButtonClick = () => {
    setIsPasswordShow((prevIsPasswordShow) => !prevIsPasswordShow);
  };

  return (
    <div className="mb-6 flex flex-col items-start justify-start">
      <label className="mb-3 text-lg font-bold text-gray-800" htmlFor={name}>
        {label}
      </label>

      <input
        className="w-full rounded-xl bg-gray-100 px-6 py-4"
        id={name}
        type="password"
        placeholder={placeholder}
        {...register}
      />
      <button
        className="password-show-btn"
        type="button"
        value="비밀번호 보이거나 가리기"
        onClick={handlePasswordShowButtonClick}
      >
        <Image
          className="password-show-icon"
          src={isPasswordShow ? passwordShowIcon : passwordHideIcon}
          alt="비밀번호를 보여주는 눈 모양 아이콘"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default FormPasswordInput;
