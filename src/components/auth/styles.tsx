import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2rem;
  @media (375px <= width < 768px) {
    max-width: 40rem;
    width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--gray-800);
  line-height: 2.148rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

interface InputProps {
  $isValid: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  color: var(--gray-400);
  background-color: var(--gray-100);
  font-weight: 400;
  line-height: 2.4rem;
  height: 5.6rem;
  border-radius: 1.2rem;
  border: ${({ $isValid }) => ($isValid ? 'none' : 'var(--error-red)')};
  padding-left: 2.4rem;
  :focus {
    border: var(--blue);
  }
`;

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  right: 1.6rem;
  bottom: 1.6rem;
  margin: auto 0.2rem;
  cursor: pointer;
`;

interface ErrorMessageProps {
  $isValid: boolean;
}

export const ErrorMessage = styled.p<ErrorMessageProps>`
  visibility: ${({ $isValid }) => ($isValid ? 'hidden' : 'visible')};
  margin: 0 0 0 1.6rem;
  color: var(--error-red);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.79rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
