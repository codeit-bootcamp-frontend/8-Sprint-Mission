import styles from "./TextArea.module.css";

export default function TextArea({ label, id, changeValue, ...props }) {
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    changeValue(name, value);
  };
  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...props} onChange={handleChangeInput} />
    </div>
  );
}
