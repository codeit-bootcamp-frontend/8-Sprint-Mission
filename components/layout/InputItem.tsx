import { ChangeEventHandler } from 'react';
import s from './InputItem.module.scss';

function InputItem(props: {
  label: string;
  value: string;
  placeholder: string;
  isTextArea?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const { label, value, placeholder, isTextArea, onChange } = props;

  return (
    <label className={s.label}>
      {label}

      {isTextArea ? (
        <textarea className={s.textArea} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input className={s.input} value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </label>
  );
}

export default InputItem;
