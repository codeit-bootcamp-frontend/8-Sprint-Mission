import { TextAreaInputProps } from "../@types/Input";
import styles from "./TextArea.module.css";

export default function TextArea({
  id,
  className,
  variant,
  label,
  changeValue,
  ...props
}: TextAreaInputProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
