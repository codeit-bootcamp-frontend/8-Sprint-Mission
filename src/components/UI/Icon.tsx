import React from "react";
import styled from "styled-components";

interface IIconWrapper {
  $size?: number;
  $fillColor?: string;
  $outlineColor?: string;
}

const IconWrapper = styled.div<IIconWrapper>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ $fillColor }) => $fillColor || "current"}; // 색 채움
    width: ${({ $size }) => ($size ? `${$size}px` : "auto")};
    height: ${({ $size }) => ($size ? `${$size}px` : "auto")};
  }

  svg path {
    stroke: ${({ $fillColor, $outlineColor }) =>
      $fillColor || $outlineColor || "currentColor"};
  }
`;

interface IconProps {
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  size: number;
  fillColor: string;
  outlineColor: string;
}

const Icon = ({ IconComponent, size, fillColor, outlineColor }: IconProps) => (
  <IconWrapper $size={size} $fillColor={fillColor} $outlineColor={outlineColor}>
    <IconComponent />
  </IconWrapper>
);

export default Icon;
