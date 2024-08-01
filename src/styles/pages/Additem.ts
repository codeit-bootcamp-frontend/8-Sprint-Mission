import styled, { BoxProps, ThemeContextType } from "styled-components";

export const Form = styled.form<BoxProps>`
  width: 1200px;
  margin: 0 auto;
  margin-top: ${({ mt }) => mt + "px"};
  margin-bottom: ${({ mb }) => mb + "px"};
  @media (max-width: 1199px) {
    width: 696px;
  }
  @media (max-width: 767px) {
    width: 344px;
  }
`;

export const FileLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 282px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--gray-400);
  background-color: var(--gray-100);
  border-radius: 12px;
  cursor: pointer;
  @media (max-width: 1199px) {
    width: 162px;
    height: 162px;
  }
`;

export const FileWrap = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  @media (max-width: 1199px) {
    width: 162px;
    height: 162px;
  }
`;

export const FileImage = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  border-radius: 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 24px;
  border-radius: 12px;
  border: 0;
  background-color: var(--gray-100);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  &::placeholder {
    color: var(--gray-400);
  }
`;

export const FileInput = styled(Input)<{
  display?: string;
}>`
  display: ${({ display }) => display};
`;

export const Section = styled.section``;

export const Button = styled.button<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  border-radius: 8px;
  background-color: var(--gray-400);
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  color: white;
  border: 0;
`;

export const Submit = styled(Button)<{
  isValid: boolean;
  theme: ThemeContextType;
}>`
  background-color: ${({ isValid, theme }) =>
    isValid ? theme.colors.brandBlueActive : theme.colors.brandBlueInActive};
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 33.41px;
  color: var(--gray-800);
  @media (max-width: 767px) {
    font-size: 20px;
    font-weight: 700;
    line-height: 23.87px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  color: var(--gray-800);
  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 700;
    line-height: 16.71px;
  }
`;

export const TextArea = styled.textarea<{
  display?: string;
}>`
  display: ${({ display }) => display};
  width: 100%;
  height: 200px;
  padding-top: 16px;
  padding-left: 24px;
  border-radius: 12px;
  border: 0;
  background-color: var(--gray-100);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  &::placeholder {
    color: var(--gray-400);
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.gray50};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
