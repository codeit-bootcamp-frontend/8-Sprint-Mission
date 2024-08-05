import styled from 'styled-components';
import heartSvg from '@/asset/svg/ic_heart.svg';

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

interface LikeButtonProps {
  favoriteCount: number;
}

function LikeButton({ favoriteCount }: LikeButtonProps) {
  return (
    <PillButton>
      <ButtonContent>
        <img src={heartSvg} alt='test' />
        {favoriteCount.toLocaleString()}
      </ButtonContent>
    </PillButton>
  );
}

export default LikeButton;
