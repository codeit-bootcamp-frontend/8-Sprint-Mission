import "../styles/components/Button.css";

/**
 * 공통 디자인을 적용한 button을 리턴
 * @param {string} className - element class name
 * @returns {element} - button element
 */
function Button({ className = "", children }) {
  const classNames = `blue-button ${className}`;
  return <button className={classNames}>{children}</button>;
}

export default Button;
