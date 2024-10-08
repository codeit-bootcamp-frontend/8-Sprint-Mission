import { useState, useEffect } from "react";
import styles from "./ErrorComponent.module.css";

interface ErrorType {
  message: string;
  isOpen: boolean;
  onResetError?: () => void;
}

export default function ErrorComponent({ message, isOpen }: ErrorType) {
  const [fade, setFade] = useState({ fadeAnimation: "fadeIn" });

  useEffect(() => {
    setFade({ fadeAnimation: "fadeIn" });
    const timer = setTimeout(() => {
      setFade({ fadeAnimation: "fadeOut" });
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen, message]);

  useEffect(() => {
    if (fade.fadeAnimation === "fadeOut") {
      const resetTimer = setTimeout(() => {
        setFade({ fadeAnimation: "fadeIn" });
      }, 1500);

      return () => clearTimeout(resetTimer);
    }
  }, [fade, isOpen]);

  return (
    <>
      {isOpen && (
        <div className={`${styles.container} ${styles[fade.fadeAnimation]}`}>
          <p className={styles.message}>{message}</p>
        </div>
      )}
    </>
  );
}
