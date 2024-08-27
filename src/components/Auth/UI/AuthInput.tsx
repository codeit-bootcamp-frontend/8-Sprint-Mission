import {
  UseFormRegister,
  Merge,
  FieldError,
  FieldErrorsImpl,
} from "react-hook-form";

interface AuthInputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  register: UseFormRegister<any>;
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  validation?: any;
}

function AuthInput({
  id,
  type,
  placeholder,
  label,
  register,
  validation,
  errors,
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-6">
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`outline-none bg-gray-100 py-4 px-6 rounded-2xl text-gray-400 ${
          errors ? "border border-red-500" : ""
        }`}
        {...register(id, validation)}
      />
      {errors && (
        <p className="text-red-500">{(errors as FieldError).message} </p>
      )}
    </div>
  );
}

export default AuthInput;
