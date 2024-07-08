import styled from 'styled-components';
import { ReactComponent as HeartSvg } from 'image/icon/ic_heart.svg';

const PillButton = styled.button`
  color: var(--gray500);
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--gray200);

  &:hover svg path {
    fill: var(--red);
    stroke: var(--red);
  }
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

function LikeButton({ favoriteCount }) {
  return (
    <PillButton>
      <ButtonContent>
        <HeartSvg />
        {favoriteCount.toLocaleString()}
      </ButtonContent>
    </PillButton>
  );
}

export default LikeButton;
