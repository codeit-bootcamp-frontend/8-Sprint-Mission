function InputItem({ id, label, value, onChange, placeholder, onKeyDown, isTextArea }) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      {isTextArea ? (
        <div id={id} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <div id={id} value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />
      )}
    </div>
  );
}

export default InputItem;
