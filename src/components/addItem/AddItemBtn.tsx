import BtnSmall from "core/buttons/BtnSmall";

interface AddItemBtnProps {
  onClick: (e: React.FormEvent<HTMLElement>) => void;
  disabled: boolean;
}

const AddItemBtn = ({ onClick, disabled }: AddItemBtnProps) => {
  return (
    <BtnSmall onClick={onClick} disabled={disabled}>
      등록
    </BtnSmall>
  );
};

export default AddItemBtn;
