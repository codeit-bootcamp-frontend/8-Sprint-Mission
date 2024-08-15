interface Content {
  name: string;
  label: string;
  placeholder: string;
  isTextArea: boolean;
}

interface TextInputProps {
  content: Content;
  onChange: (name: string, value: string | File) => void;
}

function TextInput({ content, onChange }: TextInputProps) {
  const { name, label, placeholder, isTextArea } = content;

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

      {!isTextArea ? (
        <input
          className="w-full rounded-xl bg-gray-100 px-6 py-4"
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={handleTextInputChange}
        />
      ) : (
        <textarea
          className="h-72 w-full rounded-xl bg-gray-100 px-6 py-4"
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={handleTextInputChange}
        />
      )}
    </div>
  );
}

export default TextInput;
