import { useNavigate } from "react-router-dom";
import { Main } from "../../styles/pages/Home";
import * as S from "../../styles/pages/Product";
import ProductDescriptionComponent from "src/components/ProductDescriptionComponent";
import ProductCommentsComponent from "src/components/ProductCommentsComponent";

function ProductId() {
  const navigate = useNavigate();

  return (
    <Main>
      <S.ProductContainer>
        <ProductDescriptionComponent />
        <S.VerticalBar my={24} />
        <ProductCommentsComponent />
        <S.ReturnButton onClick={() => navigate(-1)}>
          목록으로 돌아가기
        </S.ReturnButton>
      </S.ProductContainer>
    </Main>
  );
}

export default ProductId;
