import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "@components/UI/scss/Button.scss";

/**
 * Button 컴포넌트
 *
 * @param {string} className - 버튼 클래스 이름
 * @param {'small'|'medium'|'large'} [size='small'] - 버튼의 크기
 * @param {'42'|'48'} [height='42'] - 버튼의 높이 (size가 small일 때만 사용)
 * @param {'blue'|'white'} [theme='blue'] - 버튼의 테마 (size가 small이고 height가 48일 때만 white 사용 가능)
 * @param {string} [to] - Link 태그로 사용될 경우 이동할 경로
 * @param {React.ReactNode} children - 버튼 내부의 내용
 * @returns {JSX.Element} - 버튼 컴포넌트
 */
function Button({
  className,
  size = "small",
  height = "42",
  theme = "blue",
  children,
  to,
  ...props
}) {
  const getButtonClass = () => {
    let baseClass = "globalBtn";
    if (size === "small" && height === "42") {
      baseClass += " globalBtn--small42";
    } else if (size === "small" && height === "48") {
      if (theme === "white") {
        baseClass += " globalBtn--small48w";
      } else {
        baseClass += " globalBtn--small48";
      }
    } else if (size === "medium") {
      baseClass += " globalBtn--medium";
    } else if (size === "large") {
      baseClass += " globalBtn--large";
    }
    return baseClass;
  };

  if (to) {
    return (
      <Link to={to} className={`${className} ` + getButtonClass()} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`${className} ` + getButtonClass()} {...props}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  height: PropTypes.oneOf(["42", "48"]),
  theme: PropTypes.oneOf(["blue", "white"]),
  innerText: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
