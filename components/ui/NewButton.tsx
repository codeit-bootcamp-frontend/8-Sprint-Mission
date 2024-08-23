import { MouseEvent } from "react";

type ButtonProps = {
  className?: string;
  children: string;
  activeBtn?: boolean;
};

export default function NewButton({
  children,
  activeBtn,
  className,
}: ButtonProps) {
  const activeColor = activeBtn ? "bg-my-blue" : "bg-gray-400";

  return (
    <button className={` flex-center text-white ${className} ${activeColor}`}>
      {children}
    </button>
  );
}
