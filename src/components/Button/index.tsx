import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
