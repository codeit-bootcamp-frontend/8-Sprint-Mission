import { useEffect, useState } from "react";
import { getProduct } from "src/api/product";
import * as S from "src/styles/pages/Product";
import { Flex } from "src/styles/styled";
import { ProductsApi } from "src/types/type";
import defaultProfile from "src/assets/ic_profile@2x.png";
import heartImg from "src/assets/ic_heart@2x.png";
import getMoneyWon from "src/utils/getMoneyWon";
import kebabImg from "src/assets/ic_kebab@2x.png";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";

function ProductDescriptionComponent() {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductsApi | null>(null);

  useEffect(() => {
    const handleLoad = async () => {
      const nextProduct = await getProduct(productId!);
      setProduct({ ...nextProduct });
    };
    handleLoad();
  }, [productId]);

  return (
    <>
      <S.ProductImg src={product?.images[0]} alt="product" />
      <Flex flex="column" mt={16}>
        <Flex>
          <Flex flex="column" gap={8} grow={1}>
            <S.Name>{product?.name}</S.Name>
            <S.Price>{getMoneyWon(product?.price)}원</S.Price>
          </Flex>
          <S.Button w={24} h={24}>
            <img width={24} height={24} src={kebabImg} alt="kebab" />
          </S.Button>
        </Flex>
        <S.HorizentalBar my={16} />
        <Flex flex="column" gap={8}>
          <S.ContentTitle>상품 소개</S.ContentTitle>
          <S.Description>{product?.description}</S.Description>
        </Flex>
        <Flex flex="column" gap={8}>
          <S.ContentTitle>상품 태그</S.ContentTitle>
          <S.TagList>
            {product?.tags.map((tag) => (
              <S.Tag>#{tag}</S.Tag>
            ))}
          </S.TagList>
        </Flex>
        <Flex height={50} mt={40} item="center" gap={12}>
          <S.Profile src={defaultProfile} />
          <Flex flex="column" grow={1}>
            <S.ProfileName>총명한 판다</S.ProfileName>
            <S.CreateDate>
              {dayjs(product?.createdAt).format("YYYY. MM. DD")}
            </S.CreateDate>
          </Flex>
          <S.VerticalBar />
          <S.Favorite>
            <S.Heart src={heartImg} alt="heart" />
            {product?.favoriteCount}
          </S.Favorite>
        </Flex>
      </Flex>
    </>
  );
}

export default ProductDescriptionComponent;
