import BtnSmall from "core/buttons/BtnSmall";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface AddItemMoveBtnProps {
  onClick?: () => void;
}

const BtnWrap = styled.div`
  grid-area: btn;
  @media (375px <= width < 768px) {
    justify-self: end;
  }
`;

const AddItemMoveBtn = ({ onClick = () => {} }: AddItemMoveBtnProps) => {
  return (
    <BtnWrap>
      <Link to="/addItem">
        <BtnSmall onClick={onClick}>상품 등록하기</BtnSmall>
      </Link>
    </BtnWrap>
  );
};

export default AddItemMoveBtn;
