import styles from "./Container.module.css";
interface ContainerProps {
  className?: string;
  page?: boolean;
  children?: React.ReactNode;
}

export default function Container({
  className = "",
  page = false,
  children,
}: ContainerProps) {
  const classNames = `${styles.container} ${
    page ? styles.page : ""
  } ${className}`;
  return <div className={classNames}>{children}</div>;
}
