import { DefaultTag } from "core/tags/TagDefault";

import { styled } from "styled-components";
import DetailHeartBtn from "./DetailHeartBtn";

interface ProductContent {
  name: string;
  price: number;
  description: string;
  tags: string[];
  favoriteCount: number;
  isFavorite: boolean;
}
interface DetailCardContentProps {
  product: ProductContent;
}

const DetailContentWrap = styled.div`
  max-width: 69rem;
  height: 48.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.864rem;
    color: var(--gray-800);
  }

  & h2 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.617rem;
    color: var(--gray-600);
    margin-bottom: 0.8rem;
  }

  & hr {
    width: 100%;
    height: 0.1rem;
    border: 0.1rem solid var(--gray-200);
  }

  & p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.24rem;
    color: var(--gray-800);
    margin-bottom: 2.4rem;
  }

  & ul {
    flex: 3;
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  & .price {
    margin: 1.6rem 0 0;
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.773rem;
    color: var(--gray-800);
  }
`;

const DetailCardContent = ({ product }: DetailCardContentProps) => {
  const { name, price, description, tags, favoriteCount, isFavorite } = product;

  return (
    <DetailContentWrap>
      <div>
        <h1>{name}</h1>
        <p className="price">{price.toLocaleString("ko-KR")}원</p>
        <hr />
        <h2>상품 소개</h2>
        <p className="description">{description}</p>
        <h2>상품 태그</h2>
        <ul>
          {tags.map((tag) => {
            return (
              <li key={tag}>
                <DefaultTag>{"#" + tag}</DefaultTag>
              </li>
            );
          })}
        </ul>
      </div>

      <DetailHeartBtn isFavorite={isFavorite} favoriteCount={favoriteCount} />
    </DetailContentWrap>
  );
};

export default DetailCardContent;
