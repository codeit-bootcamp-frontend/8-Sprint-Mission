import * as S from './Label.style';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export const Label = ({ htmlFor, children }: LabelProps) => {
  return <S.Label htmlFor={htmlFor}>{children}</S.Label>;
};
