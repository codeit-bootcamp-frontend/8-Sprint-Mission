import styles from './SimpleInput.module.scss';

interface SimpleInputProps {
  lable: string;
  name: string;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder: string;
  isLabelVisible: boolean;
}

export default function SimpleInput({
  lable = '',
  name = '',
  type = 'text',
  placeholder = '',
  isLabelVisible = true,
}) {
  return (
    <>
      <div className={styles['wrapper-input']}>
        {isLabelVisible && <label className={styles.lable}>{lable}</label>}
        <input
          className={styles.input}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
