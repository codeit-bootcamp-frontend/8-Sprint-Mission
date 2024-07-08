// import styled from 'styled-components';
import './DeleteButton.css';
import { ReactComponent as CloseIcon } from '../../../images/icons/ic_x.svg';

// const DeleteIcon = styled(CloseIcon)`
//   &:hover {
//     cursor: pointer;
//     fill: var(--blue);
//   }
// `;

function DeleteButton({ css, label, Click }) {
  return <CloseIcon class={`deleteIcon ${css}`} aria-label={`${label} 삭제 아이콘`} onClick={Click} />;
}

export default DeleteButton;

// 코드 테스트 중
