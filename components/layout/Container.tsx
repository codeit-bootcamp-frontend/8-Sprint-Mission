import React from "react";
import classNames from "classnames";
import styles from "./Container.module.scss";

interface ContainerProps {
  className?: string;
  page?: boolean;
  children?: React.ReactNode; // 'any' 대신 'React.ReactNode' 사용
}

export default function Container({
  className = "",
  page = false,
  children,
}: ContainerProps) {
  const containerClass = classNames(
    styles.container,
    {
      [styles.page]: page,
    },
    className
  );

  return <div className={containerClass}>{children}</div>;
}
