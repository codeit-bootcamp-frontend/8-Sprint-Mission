import { colors } from '@/f_shared/config';
import styled from 'styled-components';

interface TextAreaProps {
  $isValid: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  display: flex;
  width: 100%;
  height: 17.625rem;
  padding: 0.9375rem 1.5rem;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.625rem;

  resize: none;

  border-radius: 12px;
  background: ${colors.coolGray[100]};
  border: ${({ $isValid }) =>
    $isValid ? 'none' : `1px solid ${colors.error}`};
`;
