import styles from "./Button.module.css";

export default function Button({ type, btnName, className, isActive }) {
  return (
    <>
      <div className={`${styles.btnContainer} ${className}`}>
        <button disabled={isActive} type={type}>
          {btnName}
        </button>
      </div>
    </>
  );
}
