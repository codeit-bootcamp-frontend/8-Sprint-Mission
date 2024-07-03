import { styled } from "styled-components";

interface LargeButtonProps {
  $bgColor: string | null;
  $color: string | null;
}

const LargeButton = styled.button<LargeButtonProps>`
  min-width: 36rem;
  padding: 1.6rem 12.4rem;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  font-size: 2rem;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  border-radius: 4rem;
`;

interface BtnLargeProps {
  bgColor: string | null;
  color: string | null;
  children: string;
}

const BtnLarge = ({ bgColor, color, children }: BtnLargeProps) => {
  return (
    <LargeButton $bgColor={bgColor} $color={color}>
      {children}
    </LargeButton>
  );
};

export default BtnLarge;
