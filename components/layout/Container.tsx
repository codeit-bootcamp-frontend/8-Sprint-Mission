import styles from "./Container.module.scss";

interface ContainerProps {
  className?: string;
  page?: boolean;
  children?: any;
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
