import styles from "./Dost.module.css";

export default function Dots({ onEditOpenHandler }) {
  return (
    <div className={styles.dotsContainer} onClick={onEditOpenHandler}>
      <div className={styles.dots} />
    </div>
  );
}
