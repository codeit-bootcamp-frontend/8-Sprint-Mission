import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "@components/UI/scss/Button.scss";

/**
 * @param {small (default), medium, large} size - 크기
 * @param {42 (default), 48} height - size가 small 일 때, 42 또는 48
 * @param {blue (default), white} theme - size가 small 이고 높이가 48일 때, white
 * @param innerText - 버튼 Text
 */
function Button({
  size = "small",
  height = "42",
  theme = "blue",
  innerText = "",
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
      <Link to={to} className={getButtonClass()} {...props}>
        {innerText}
      </Link>
    );
  }

  return (
    <button className={getButtonClass()} {...props}>
      {innerText}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  height: PropTypes.oneOf(["42", "48"]),
  theme: PropTypes.oneOf(["blue", "white"]),
  innerText: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
