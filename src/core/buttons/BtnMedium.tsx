import React from "react";
import { styled } from "styled-components";

interface MediumButtonProps {
  $bgColor?: string;
  $color?: string;
}

const MediumButton = styled.button<MediumButtonProps>`
  min-width: 24rem;
  padding: 1.2rem 7.1rem;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};
  font-size: 1.8rem;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  border-radius: 4rem;
`;

interface BtnMediumProps {
  bgColor?: string;
  color?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const BtnMedium = ({
  bgColor = "var(--main-color)",
  color = "white",
  children,
  disabled = false,
  onClick = () => {},
}: BtnMediumProps) => {
  return (
    <MediumButton
      $bgColor={bgColor}
      $color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MediumButton>
  );
};

export default BtnMedium;
