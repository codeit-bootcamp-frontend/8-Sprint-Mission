import type { InputChangeEvent } from "@/types/alias";
import { KeyboardEvent } from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange: (e: InputChangeEvent) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  placeholder,
  type,
  label,
  value,
  onChange,
  onKeyDown,
}: InputProps) {
  return (
    <div className="flex flex-col pb-6">
      <label className="pb-4 text-lg font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-xl border-none bg-gray-100 px-6 py-4 outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></input>
    </div>
  );
}
