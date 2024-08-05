import { ChangeEvent } from "react";
import "./TextInput.css";

interface Props {
  isTextArea: boolean;
  name: string;
  label: string;
  placeholder: string;
  onChange: (name: string, value: string) => void;
}

function TextInput({ isTextArea, name, label, placeholder, onChange }: Props) {
  const classNames = isTextArea
    ? "text-input-content product-introduction"
    : "text-input-content";

  const handleTextInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="text-input-wrapper">
      <label className="text-input-label" htmlFor={name}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className={classNames}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={handleTextInputChange}
        />
      ) : (
        <input
          className={classNames}
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={handleTextInputChange}
        />
      )}
    </div>
  );
}

export default TextInput;
