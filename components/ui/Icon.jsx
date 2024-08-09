import styles from "./Icon.module.scss";

const Icon = ({ type, size = "md", className = "", ...props }) => {
  // 아이콘 클래스 이름 조합
  const iconClass = [
    styles.icon,
    styles[`icon-${size}`],
    styles[`ic_${type}`],
    className,
  ].join(" ");

  return <i className={iconClass} {...props}></i>;
};

export default Icon;
