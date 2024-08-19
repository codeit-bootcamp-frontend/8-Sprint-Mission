import { InputTextType } from "@/types/inputType";
import { SetStateAction } from "react";

interface InputTextAreaProps {
  content: InputTextType;
  value: string;
  height?: string;
  setTextareaText: React.Dispatch<SetStateAction<string>>;
}

export default function InputTextArea({
  content,
  value,
  height,
  setTextareaText,
}: InputTextAreaProps) {
  const heightClass = height ? `h-[104px]` : `h-[282px]`;
  return (
    <div className="mb-[24px]">
      <label
        className="block text-[18px] font-bold mb-[12px]"
        htmlFor={content.id}
      >
        {content.label}
      </label>
      <textarea
        className={`w-full ${heightClass} text-[16px] rounded-[12px] py-[16px] px-[24px] bg-gray-100 resize-none`}
        id={content.id}
        value={value}
        placeholder={content.placeholder}
        onChange={(e) => setTextareaText(e.target.value)}
      />
    </div>
  );
}
