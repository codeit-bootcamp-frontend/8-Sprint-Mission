import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getDetailProduct } from "../../api/api";
import ProductInfo from "./components/ProductInfo";
import InquiryCommentBox from "./components/InquiryCommentBox";
import { TbArrowBack } from "react-icons/tb";
import useAsync from "../../hooks/useAsync";

const Container = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const ReturnButton = styled(Link)`
  align-self: center;
  margin: 2rem 0;
  background-color: var(--brand-blue);
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 5rem;
`;
const Loading = styled.div`
  margin: 10rem auto;
  font-size: 10rem;
  text-align: center;
`;

function ProductPage(props) {
  const productId = useParams();
  const [fetchStatus, data] = useAsync(getDetailProduct, productId);
  const { getData: product } = data;
  if (fetchStatus === "에러") {
    alert("error");
    return;
  }

  if (fetchStatus !== "완료") {
    return <Loading>loading중</Loading>;
  }

  return (
    <>
      {fetchStatus === "완료" && (
        <Container>
          <ProductInfo product={product} />
          <InquiryCommentBox productId={productId} />
          <ReturnButton to="/products">
            목록으로 돌아가기 <TbArrowBack />
          </ReturnButton>
        </Container>
      )}
    </>
  );
}

export default ProductPage;
