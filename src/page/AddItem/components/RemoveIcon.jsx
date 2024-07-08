// import styled from 'styled-components';
import './RemoveIcon.css';
import { ReactComponent as XIcon } from 'image/icon/ic_x.svg';

// const DeleteIcon = styled(CloseIcon)`
//   &:hover {
//     cursor: pointer;
//     fill: var(--blue);
//   }
// `;

function RemoveIcon({ css, label, Click }) {
  return <XIcon class={`deleteIcon ${css}`} aria-label={`${label} 삭제 아이콘`} onClick={Click} />;
}

export default RemoveIcon;

// 코드 테스트 중
