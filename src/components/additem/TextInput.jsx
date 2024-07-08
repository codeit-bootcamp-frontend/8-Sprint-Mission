import "./TextInput.css";

function TextInput({ isTextArea, name, label, placeholder, onChange }) {
  const classNames = isTextArea
    ? "text-input-content product-introduction"
    : "text-input-content";

  const handleTextInputChange = (e) => {
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
