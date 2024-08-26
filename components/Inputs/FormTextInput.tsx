import { UseFormRegister } from "react-hook-form";

interface Content {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

interface FormTextInputProps {
  content: Content;
  register: UseFormRegister<Record<string, any>>;
}

function FormTextInput({ content, register }: FormTextInputProps) {
  const { name, label, type, placeholder } = content;

  return (
    <div className="mb-6 flex flex-col items-start justify-start">
      <label className="mb-3 text-lg font-bold text-gray-800" htmlFor={name}>
        {label}
      </label>

      <input
        className="w-full rounded-xl bg-gray-100 px-6 py-4"
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}

export default FormTextInput;
