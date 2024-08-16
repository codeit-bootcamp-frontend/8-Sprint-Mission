import { InputTextType } from "@/types/inputType";

interface InputTextProps {
  content: InputTextType;
}

export default function InputText({ content }: InputTextProps) {
  return (
    <div className="mb-[24px]">
      <label
        className="block text-[18px] font-bold mb-[12px]"
        htmlFor={content.id}
      >
        {content.label}
      </label>
      <input
        className="w-full h-[56px] text-[16px] rounded-[12px] px-[24px] bg-gray-100"
        id={content.id}
        type="text"
        placeholder={content.placeholder}
      />
    </div>
  );
}
