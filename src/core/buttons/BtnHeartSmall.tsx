import { styled } from "styled-components";
import { BtnHeartProps, LargeHeartBtn } from "./BtnHeartLarge";
import activeHeartImg from "core/assets/icons/heartIcon/active-large.svg";
import inactiveHeartImg from "core/assets/icons/heartIcon/inactive-large.svg";

const SmallHeartBtn = styled(LargeHeartBtn)`
  max-width: 7.9rem;
  max-height: 3.2rem;

  & img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const BtnHeartSmall = ({
  isFavorite,
  favoriteCount,
  onClick,
}: BtnHeartProps) => {
  return (
    <SmallHeartBtn>
      <img src={isFavorite ? activeHeartImg : inactiveHeartImg} />
      {favoriteCount}
    </SmallHeartBtn>
  );
};

export default BtnHeartSmall;
