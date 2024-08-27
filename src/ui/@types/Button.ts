import { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

interface LinkButtonProps {
  to?: string;
  type?: ButtonType;
  btnName?: ReactNode;
  isActive?: boolean;
  className?: string;
}

export type { LinkButtonProps };
