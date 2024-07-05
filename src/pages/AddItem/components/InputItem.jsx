import './InputItem.css';

function InputItem({ id, label, value, onChange, placeholder, onKeyDown, isTextArea }) {
  return (
    <>
      {label && (
        <label className='label' htmlFor={id}>
          {label}
        </label>
      )}

      {isTextArea ? (
        <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input id={id} value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />
      )}
    </>
  );
}

export default InputItem;
