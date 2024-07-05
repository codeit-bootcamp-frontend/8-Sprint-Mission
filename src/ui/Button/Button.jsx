import styles from "./Button.module.css";

export default function Button({ type, btnName, isActive, variant }) {
  const variantCheck = variant && styles.commentForm;

  return (
    <>
      <button
        className={`${styles.button} ${variantCheck}`}
        disabled={isActive}
        type={type}
      >
        {btnName}
      </button>
    </>
  );
}
