import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../../api/itemApi";
import HeartIcon from "../../../assets/images/icons/ic_heart.png";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const Img = styled.img`
  width: 486px;
  height: 486px;
  border-radius: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const HeadTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #1f2937;
  padding-bottom: 16px;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 40px;
  color: #1f2937;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
`;

const ItemTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  color: #4b5563;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const ItemIntroduction = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #1f2937;
  padding-bottom: 8px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ItemTag = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1f2937;
  padding: 6px 16px;
  background-color: #f3f4f6;
  border-radius: 26px;
`;

const HeartButton = styled.button`
  min-width: 87px;
  width: fit-content;
  font-weight: 500;
  font-size: 16px;
  color: #6b7280;
  padding: 3px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 35px;
  margin-top: auto;
`;

const HeartImage = styled.img`
  width: 32px;
  height: 32px;
`;

interface ItemProps {
  favoriteCount: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

function ProductSection() {
  const { productid } = useParams();
  const [item, setItem] = useState<ItemProps>({
    favoriteCount: 0,
    images: [],
    tags: [],
    price: 0,
    description: "",
    name: "",
    id: 0,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const params = productid ? { productid } : {};
        const products = await getProducts(params);

        setItem(products);
      } catch (error) {
        console.error("상품을 불러오지 못했습니다.", error);
      }
    };

    fetchProduct();
  }, [productid]);

  if (!item) {
    return <Container>상품을 불러오는 중입니다.</Container>;
  }

  return (
    <Container>
      <Img src={item.images[0]} alt={item.name} />
      <TitleContainer>
        <HeadTitle>{item.name}</HeadTitle>
        <Price>{item.price.toLocaleString("ko-KR")}원</Price>
        <ItemTitle>상품 소개</ItemTitle>
        <ItemIntroduction>{item.description}</ItemIntroduction>
        <ItemTitle>상품 태그</ItemTitle>
        <TagContainer>
          {item.tags.map((tag) => (
            <ItemTag key={`tags-${item.tags}`}>#{tag}</ItemTag>
          ))}
        </TagContainer>
        <HeartButton>
          <HeartImage src={HeartIcon} alt="하트 아이콘" /> {item.favoriteCount}
        </HeartButton>
      </TitleContainer>
    </Container>
  );
}

export default ProductSection;
