import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "src/api/product";
import { Main } from "../../styles/pages/Home";
import * as S from "../../styles/pages/Product";
import { Flex } from "../../styles/styled";
import { ProductsApi } from "src/types/type";

function ProductId() {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductsApi | null>(null);

  const handleLoad = async (id: number) => {
    const nextProduct = await getProduct(id);
    console.log(nextProduct);
    setProduct({ ...nextProduct });
  };

  useEffect(() => {
    handleLoad(Number(productId));
  }, [productId]);

  console.log(1);

  return (
    <Main>
      <S.ProductContainer>
        <img src={product?.images[0]} alt="product" width={486} height={486} />
        <Flex>
          <S.Name>{product?.name}</S.Name>
        </Flex>
      </S.ProductContainer>
    </Main>
  );
}

export default ProductId;
