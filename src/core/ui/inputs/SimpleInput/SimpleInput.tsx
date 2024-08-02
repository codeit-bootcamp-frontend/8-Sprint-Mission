import styles from './SimpleInput.module.scss';

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
