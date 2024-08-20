import { TextAreaInputProps } from './types/InputType';
import styles from './TextArea.module.css';

export default function TextArea({
  id,
  className,
  label,
  changeValue,
  ...props
}: TextAreaInputProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    changeValue(name, value);
  };

  return (
    <div className={`${className ? className : ''}`}>
      <label className={styles.textArealabel} htmlFor={id}>
        {label}
      </label>
      <textarea
        className={styles.textArea}
        id={id}
        {...props}
        onChange={handleChangeInput}
      />
    </div>
  );
}
