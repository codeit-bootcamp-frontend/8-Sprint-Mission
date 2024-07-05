import { styled } from "styled-components";
import activeHeartImg from "core/assets/icons/heartIcon/active-large.svg";
import inactiveHeartImg from "core/assets/icons/heartIcon/inactive-large.svg";

export interface BtnHeartProps {
  isFavorite: boolean;
  favoriteCount: number;
  onClick: () => void;
}

export const LargeHeartBtn = styled.button`
  max-width: 8.7rem;
  max-height: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.909rem;
  color: var(--gray-500);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.4rem 1.2rem;
  background-color: white;
  border: 0.1rem solid var(--gray-200);
  border-radius: 3.5rem;
  cursor: pointer;

  & img {
    display: inline-block;
    width: 3.2rem;
    heigh: 3.2rem;
  }
`;

const BtnHeartLarge = ({
  isFavorite,
  favoriteCount,
  onClick,
}: BtnHeartProps) => {
  const handeClick = () => {
    onClick();
  };
  return (
    <LargeHeartBtn onClick={handeClick}>
      <img
        src={isFavorite ? activeHeartImg : inactiveHeartImg}
        alt="하트아이콘"
      />
      {favoriteCount}
    </LargeHeartBtn>
  );
};

export default BtnHeartLarge;
