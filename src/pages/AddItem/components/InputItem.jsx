import './InputItem.css';

function InputItem({ id, label, value, onChange, placeholder, onKeyDown, isTextArea }) {
  return (
    <div>
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
    </div>
  );
}

export default InputItem;
