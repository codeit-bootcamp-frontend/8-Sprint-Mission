import styles from './Input.module.css';

export default function Input({ label, id, className, changeValue, ...props }) {
  const handleChangeInput = e => {
    let { name, value } = e.target;
    changeValue(name, value);
  };

  return (
    <div className={`${className ? className : ''}`}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        {...props}
        onChange={handleChangeInput}
      />
    </div>
  );
}
