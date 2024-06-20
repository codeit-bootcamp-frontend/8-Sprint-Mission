import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonStylesType = Record<string, Record<string, string>>;
type ButtonType = 'medium' | 'large';
interface ButtonProps {
  children: ReactNode;
  type?: ButtonType;
  width: string;
  height: string;
  onClick: () => void;
}

const buttonStyles: ButtonStylesType = {
  medium: {
    borderRadius: '0.8rem',
    color: 'var(--white)',
    backgroundColor: 'var(--brand-blue)',

    fontSize: '1.6rem',
    fontWeight: '600',
    lineHeight: '1.9rem',
  },
  large: {
    borderRadius: '4rem',
    color: 'var(--white)',
    backgroundColor: 'var(--brand-blue)',

    fontSize: '2rem',
    fontWeight: '600',
    lineHeight: '2.4rem',
    textAlign: 'center',
  },
};

function Button({ children, type = 'medium', width, height }: ButtonProps) {
  return (
    <StyledButton styles={buttonStyles} type={type} width={width} height={height}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<{ styles: ButtonStylesType; type: ButtonType; width: string; height: string }>`
  ${({ styles, type }) => css(styles[type])};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
