import { styled } from "styled-components";

const CircleBtn = styled.button<{isActive:boolean}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  background-color: {({isActive}) => isActive ? #3f80ed : white};
  border: 1px solid #e5e7eb;
  color: {({isActive}) => isActive ? white : #6b7280};
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

interface BtnCircleProps {
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
  isActive?: boolean;
  children?: React.ReactNode;
}

const BtnCircle = ({
  onClick = () => {},
  disabled = false,
  isActive = false,
  children = "",
}: BtnCircleProps) => {

  return (
    <CircleBtn disabled={disabled} isActive={isActive} onClick={onClick}>
      {children}
    </CircleBtn>
  );
};

export default BtnCircle;
