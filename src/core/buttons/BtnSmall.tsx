import { styled } from "styled-components";

interface BtnSmallProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: string | React.ReactNode;
  disabled?: boolean;
}

const Button = styled.button`
  min-width: 88px;
  border-radius: 8px;
  padding: 12px 20px;
  background-color: #3692ff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  border: solid;
  grid-area: smallBtn;
  cursor: pointer;
  &:disabled {
    background-color: #9ca3af;
  }
`;

const BtnSmall = ({ onClick, children, disabled = false }: BtnSmallProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onClick(e);
  };
  return (
    <Button className="btn-small" onClick={handleClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default BtnSmall;
