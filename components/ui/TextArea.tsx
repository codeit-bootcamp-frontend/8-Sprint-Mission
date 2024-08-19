import { InputChangeEvent } from "@/types/alias";
import { ChangeEvent } from "react";

interface TextAreaProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  name,
  placeholder,
  label,
  value,
  onChange,
  className,
}: TextAreaProps) {
  return (
    <div className="flex flex-col pb-6">
      <label className="pb-4 text-lg font-bold" htmlFor={name}>
        {label}
      </label>
      <textarea
        className={`rounded-xl border-none bg-gray-100 px-6 py-4 outline-none  resize-none ${className}`}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
      ></textarea>
    </div>
  );
}
