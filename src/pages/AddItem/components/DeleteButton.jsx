import { ReactComponent as CloseIcon } from '../../../images/icons/ic_x.svg';

function DeleteButton({ onClick, label }) {
  return (
    <button aria-label={`${label} 삭제`} onClick={onClick}>
      <CloseIcon />
    </button>
  );
}

export default DeleteButton;
