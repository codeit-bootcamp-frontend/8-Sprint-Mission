import { InputChangeEvent } from "@/types/alias";

interface TextAreaProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange: (e: InputChangeEvent) => void;
}

export default function TextArea({
  name,
  placeholder,
  label,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <div className="flex flex-col pb-6">
      <label className="pb-4 text-lg font-bold" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="rounded-xl border-none bg-gray-100 px-6 py-4 outline-none h-[200px]"
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
      ></textarea>
    </div>
  );
}
