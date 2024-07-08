import styles from "./TextArea.module.css";

export default function TextArea({
  className,
  variant,
  label,
  id,
  changeValue,
  ...props
}) {
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    changeValue(name, value);
  };

  const variantCheck =
    variant === "addProduct" ? styles.addProduct : styles.comment;

  return (
    <div className={`${className ? className : ""}`}>
      <label className={styles.textArealabel} htmlFor={id}>
        {label}
      </label>
      <textarea
        className={`${styles.textArea} ${variantCheck}`}
        id={id}
        {...props}
        onChange={handleChangeInput}
      />
    </div>
  );
}
