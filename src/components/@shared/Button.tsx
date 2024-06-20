import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button``;
