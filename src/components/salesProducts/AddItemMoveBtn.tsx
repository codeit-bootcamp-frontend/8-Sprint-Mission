import BtnSmall from "core/buttons/BtnSmall";
import { Link } from "react-router-dom";

interface AddItemMoveBtnProps {
  onClick?: () => void;
}

const AddItemMoveBtn = ({ onClick = () => {} }: AddItemMoveBtnProps) => {
  return (
    <Link to="/addItem">
      <BtnSmall onClick={onClick}>상품 등록하기</BtnSmall>
    </Link>
  );
};

export default AddItemMoveBtn;
