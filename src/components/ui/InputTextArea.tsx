import { InputTextType } from "@/types/inputType";
import { SetStateAction } from "react";

interface InputTextAreaProps {
  content: InputTextType;
  value: string;
  setTextareaText: React.Dispatch<SetStateAction<string>>;
}

export default function InputTextArea({
  content,
  value,
  setTextareaText,
}: InputTextAreaProps) {
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
        value={value}
        placeholder={content.placeholder}
        onChange={(e) => setTextareaText(e.target.value)}
      />
    </div>
  );
}
