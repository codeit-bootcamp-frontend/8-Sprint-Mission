import { styled } from "styled-components";
import DetailCardContent from "./DetailCardContent";
import DetailImage from "./DetailImage";

interface DetailCardProps {
  productId: number;
}

const product = {
  id: 9,
  name: "LG 32인치 모니터",
  description:
    "LG 모니터 32인치 팝니다 서울 직거래~ 010-1234-1234 연락 부탁드립니다",
  price: 200000,
  tags: ["미개봉", "직거래", "모니터", "32인치"],
  images: [
    "https://d21x3meyyr2jva.cloudfront.net/image_temp/1667290461000_%ED%83%9C%EB%B8%94%EB%A6%BF_%EC%95%A0%ED%94%8C.png",
  ],
  ownerId: 5,
  favoriteCount: 8,
  createdAt: "2024-04-11T11:28:20.147Z",
  updatedAt: "2024-06-14T11:32:02.292Z",
  isFavorite: false,
};

const DetailCardWrap = styled.div`
  display: flex;
  gap: 2.4rem;
  margin: 0 2.4rem;
`;

const DetailCard = ({ productId }: DetailCardProps) => {
  return (
    <DetailCardWrap>
      <DetailImage name={product.name} imgSrc={product.images[0]} />
      <DetailCardContent product={product} />
    </DetailCardWrap>
  );
};

export default DetailCard;
