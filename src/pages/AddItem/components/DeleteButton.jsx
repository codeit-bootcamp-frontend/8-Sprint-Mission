import { ReactComponent as CloseIcon } from '../../../images/icons/ic_x.svg';
import styled from 'styled-components';

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
  fill: #9ca3af;

  &:hover {
    fill: #3692ff;
  }
`;

function DeleteButton({ onClick, label }) {
  return <CloseButton type='button' aria-label={`${label} 삭제`} onClick={onClick} />;
}

export default DeleteButton;
