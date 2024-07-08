import styled from 'styled-components';
import removeIcon from 'assets/images/addProduct/remove-icon.png';

export const StyledRemoveButton = styled.button`
  width: 2rem;
  height: 2rem;

  background-image: url(${removeIcon});
  background-size: 0.8rem;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--cool-gray-400);

  color: var(--white);
  border-radius: 50%;

  &.preview-remove-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.3rem;
    background-color: var(--brand-blue);
  }
`;
