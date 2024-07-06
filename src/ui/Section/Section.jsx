import styles from './Section.module.css';

export default function Wrapper({ children }) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>{children}</div>
      </section>
    </>
  );
}
