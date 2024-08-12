import React from "react";
import styles from "./Icon.module.scss";

type IconSize = "sm" | "md" | "lg";

interface IconProps extends HTMLProps<HTMLElement> {
  type: string;
  size: IconSize;
  className?: string;
  alt?: string;
}
const Icon = ({ type, size = "md", className = "", ...props }: IconProps) => {
  const iconClass = [
    styles.icon,
    styles[`icon-${size}`],
    styles[`ic_${type}`],
    className,
  ].join(" ");

  return <i className={iconClass} {...props}></i>;
};

export default Icon;
