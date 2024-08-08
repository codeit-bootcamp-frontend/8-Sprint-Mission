import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  buttonText: string;
  to?: string;
}

function Button({ buttonText, to }: ButtonProps) {
  // LinkButton
  if (to) {
    return (
      <Link
        to={to}
        className="bg-brand text-white content-center text-center w-[133px] rounded-lg"
      >
        {buttonText}
      </Link>
    );
  }

  // Button
  return (
    <button className="bg-brand text-white content-center text-center w-[133px] rounded-lg">
      {buttonText}
    </button>
  );
}

export default Button;
