import styles from "./Loading.module.css";

export default function Loading({ className }) {
  return (
    <div className={`${styles.loaderContainer} ${className}`}>
      <div className={styles.loaderWrapper}>
        <div className={styles.ldsEllipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
