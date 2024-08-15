import { MouseEvent } from "react";

type ButtonProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className: string;
  children: string;
  activeBtn: boolean;
};

export default function Button({
  onClick,
  children,
  activeBtn,
  className,
}: ButtonProps) {
  const activeColor = activeBtn ? "bg-my-blue" : "bg-gray-400";

  return (
    <button
      onClick={(e) => {
        onClick(e);
      }}
      className={`${className} ${activeColor}`}
    >
      {children}
    </button>
  );
}
