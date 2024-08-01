import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children?: ReactNode;
  onClick?: any;
  select?: string;
  width?: string;
}

function Button({ children, onClick, select = "", width = "" }: ButtonProps) {
  const classNames = `Button ${select} ${width}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
