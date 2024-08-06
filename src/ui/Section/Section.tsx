import { ReactNode } from "react";
import styles from "./Section.module.css";

interface Props {
  children: ReactNode;
}

export default function Wrapper({ children }: Props) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>{children}</div>
      </section>
    </>
  );
}
