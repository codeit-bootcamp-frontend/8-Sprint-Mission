interface TextareaInputProps {
  htmlFor: string;
  title: string;
  placeholder: string;
  value?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

function TextareaInput({
  htmlFor,
  title,
  placeholder,
  value,
  onChange,
  className,
  onKeyDown,
}: TextareaInputProps) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={htmlFor} className="font-bold text-gray-900 text-lg">
        {title}
      </label>
      <textarea
        className={`${className} focus:outline-none bg-gray-100 rounded-lg px-6 py-4 resize-none w-full`}
        id={htmlFor}
        name={htmlFor}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default TextareaInput;
