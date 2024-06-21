import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
type ButtonCategoryType = 'medium' | 'large';

interface ButtonProps {
  children: ReactNode;
  width: string;
  height: string;
  onClick?: () => void;
  disabled?: boolean;
  $category?: ButtonCategoryType; // Styled-component 에서만 사용될 prop은 $를 붙여주지 않으면 콘솔창에 경고가 발생
  type?: 'submit' | 'button' | 'reset';
}

const buttonStyles = {
  medium: css`
    border-radius: 0.8rem;
    color: var(--white);
    background-color: var(--brand-blue);

    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.9rem;
  `,
  large: css`
    border-radius: 4rem;
    color: var(--white);
    background-color: var(--brand-blue);

    font-size: 2rem;
    font-weight: 600;
    line-height: 2.4rem;
    text-align: center;
  `,
};

function Button({
  children,
  $category = 'medium',
  width,
  height,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  console.log('disabled');
  return (
    <StyledButton type={type} $category={$category} width={width} height={height} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<{
  $category: ButtonCategoryType;
  width: string;
  height: string;
}>`
  ${({ $category }) => buttonStyles[$category]};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
