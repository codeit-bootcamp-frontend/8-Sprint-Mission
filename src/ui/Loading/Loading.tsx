import styles from "./Loading.module.css";
interface LoadingProps {
  className?: string;
}

export default function Loading({ className }: LoadingProps) {
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
