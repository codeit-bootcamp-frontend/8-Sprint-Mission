import { FieldErrors, FieldValues } from "react-hook-form";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: any;
  validator: object;
  errors: any;
}

export default function NewInput({
  name,
  placeholder,
  type,
  label,
  register,
  validator,
  errors,
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
        id={name}
        {...register(name, validator)}
      ></input>
      <div className="text-my-error-red">{errors[name]?.message}</div>
    </div>
  );
}
