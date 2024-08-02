import { MouseEvent } from "react";

type ButtonProps = {
  onClick: (e: MouseEvent, validateOk: boolean) => void;
  children: string;
  activeBtn: boolean;
};

export default function Button({ onClick, children, activeBtn }: ButtonProps) {
  const activeColor = activeBtn ? "bg-my-blue" : "bg-gray-400";

  return (
    <button
      onClick={(e) => {
        onClick(e, activeBtn);
      }}
      className={`w-full rounded-[40px] p-4 text-white ${activeColor}`}
    >
      {children}
    </button>
  );
}
