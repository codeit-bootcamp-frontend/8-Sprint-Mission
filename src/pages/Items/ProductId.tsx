import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/product";
import { Main } from "../../styles/pages/Home";
import * as S from "../../styles/pages/Product";
import { Flex } from "../../styles/styled";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const handleLoad = async (id) => {
    const nextProduct = await getProduct(id);
    console.log(nextProduct);
    setProduct({ ...nextProduct });
  };

  useEffect(() => {
    handleLoad(productId);
  }, [productId]);

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

export default Product;
