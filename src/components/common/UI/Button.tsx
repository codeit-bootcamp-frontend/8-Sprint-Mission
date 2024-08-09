import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  buttonText: string;
  to?: string;
  className?: string;
  onClick?: () => void;
}

function Button({ buttonText, to, className, onClick }: ButtonProps) {
  // LinkButton
  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${className} bg-brand text-white content-center text-center w-[133px] rounded-lg`}
      >
        {buttonText}
      </Link>
    );
  }

  // Button
  return (
    <button
      onClick={onClick}
      className={`${className} bg-brand text-white content-center text-center rounded-lg px-6 h-full`}
    >
      {buttonText}
    </button>
  );
}

export default Button;
