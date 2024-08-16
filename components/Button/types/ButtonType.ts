import { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

interface LinkButtonProps {
  href?: string;
  type?: ButtonType;
  btnName?: ReactNode;
  isActive?: boolean;
  className?: string;
}

export type { LinkButtonProps };
