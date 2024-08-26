import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({
  children,
  disabled: disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#9CA3AF" : "#3692ff")};
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  border: none;
`;
