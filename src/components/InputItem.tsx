import { ChangeEvent, KeyboardEvent } from 'react';
import './InputItem.css';

function InputItem(props: {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  isTextArea?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}) {
  const { id, label, value, placeholder, isTextArea, onChange, onKeyDown } = props;

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
