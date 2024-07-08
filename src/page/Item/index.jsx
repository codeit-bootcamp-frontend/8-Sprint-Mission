import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ItemProfileSection from './components/ItemProfileSection';
import ItemCommentSection from './components/ItemCommentSection';
import { ReactComponent as BackIcon } from 'image/icon/ic_back.svg';
import { getProductDetail } from 'api/itemApi';

const BackMarketPage = styled(NavLink)`
  background-color: var(--blue);
  color: #fff;
  width: 240px;
  height: 48px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  padding: 12px 38.5px;

  &:hover {
    background-color: var(--hover);
  }

  &:focus {
    background-color: var(--click);
  }

  &:disabled {
    background-color: var(--gray400);
    pointer-events: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }

  @media (min-width: 1280px) {
    max-width: 1200px;
    padding: 24px 0;
    margin: 0 auto;
  }
`;

function ItemPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) {
        setError('상품 아이디가 제공되지 않았어요.');
        return;
      }

      try {
        const data = await getProductDetail(productId);
        if (!data) {
          throw new Error('해당 상품의 데이터를 찾을 수 없습니다.');
        }
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchProduct();
  }, [productId]);

  if (error) {
    alert(`오류: ${error}`);
  }

  if (!productId || !product) return null;

  return (
    <Container>
      <ItemProfileSection product={product} />
      <ItemCommentSection productId={productId} />
      <BackMarketPage to='/items'>
        목록으로 돌아가기
        <BackIcon />
      </BackMarketPage>
    </Container>
  );
}

export default ItemPage;
