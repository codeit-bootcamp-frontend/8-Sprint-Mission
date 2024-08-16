import { InputTextType } from "@/types/inputType";

interface InputTextProps {
  content: InputTextType;
}

export default function InputTextArea({ content }: InputTextProps) {
  return (
    <div className="mb-[24px]">
      <label
        className="block text-[18px] font-bold mb-[12px]"
        htmlFor={content.id}
      >
        {content.label}
      </label>
      <textarea
        className="w-full h-[282px] text-[16px] rounded-[12px] py-[16px] px-[24px] bg-gray-100"
        id={content.id}
        placeholder={content.placeholder}
      />
    </div>
  );
}
