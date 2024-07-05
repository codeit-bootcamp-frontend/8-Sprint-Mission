import { styled } from "styled-components";

interface DetailImageProps {
  name: string;
  imgSrc: string;
}

const DetailImgWrap = styled.div`
  width: 48.8rem;
  max-height: 48.8rem;
`;

const DetailImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
`;

const DetailImage = ({ imgSrc, name }: DetailImageProps) => {
  return (
    <DetailImgWrap>
      <DetailImg src={imgSrc} alt={`${name} 미리보기`} />
    </DetailImgWrap>
  );
};

export default DetailImage;
