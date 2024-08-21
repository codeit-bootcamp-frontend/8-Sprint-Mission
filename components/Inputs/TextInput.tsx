interface Content {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

interface TextInputProps {
  content: Content;
  onChange: (name: string, value: string) => void;
}

function TextInput({ content, onChange }: TextInputProps) {
  const { name, label, type, placeholder } = content;

  const handleTextInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    onChange(name, value);
  };

  return (
    <div className="mb-6 flex flex-col items-start justify-start">
      <label className="mb-3 text-lg font-bold text-gray-800" htmlFor={name}>
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          className="w-full rounded-xl bg-gray-100 px-6 py-4"
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={handleTextInputChange}
        />
      ) : (
        <input
          className="w-full rounded-xl bg-gray-100 px-6 py-4"
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleTextInputChange}
        />
      )}
    </div>
  );
}

export default TextInput;
