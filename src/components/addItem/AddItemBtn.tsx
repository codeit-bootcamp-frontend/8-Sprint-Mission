import BtnSmall from "core/buttons/BtnSmall";

interface AddItemBtnProps {
  disabled: boolean;
}

const AddItemBtn = ({ disabled }: AddItemBtnProps) => {
  return (
    <BtnSmall onClick={() => {}} disabled={disabled}>
      등록
    </BtnSmall>
  );
};

export default AddItemBtn;
