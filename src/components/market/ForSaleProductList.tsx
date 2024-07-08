import styled from 'styled-components';
import Product from './Product';
import useProductsQuery from 'queries/useProductsQuery';
import Pagination from 'components/@shared/Pagination';
import usePageSize from 'hooks/usePageSize';
import { IProduct, ProductOrderByType } from 'types/@shared/marketTypes';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from ' constants/infomations/mediaQuerySize';
import { useSearchParams } from 'react-router-dom';

interface ForSaleProductListProps {
  order: ProductOrderByType;
  keyword: string;
}

function ForSaleProductList({ order, keyword }: ForSaleProductListProps) {
  const [serchParams, setSearchParams] = useSearchParams(); // 현재 페이지 번호
  const currentPage = serchParams.get('page');

  // 상품 상세 페이지 등에서 목록으로 돌아가기 버튼을 누를 경우에, 사용자가 들어왔던 페이지를 기억하기 위함
  // 만약 100 페이지에서 상품 상세 페이지를 들어온 경우에,
  // 목록으로 돌아가기 버튼을 눌렀을 때 1 페이지로 돌아가지 않기 위해 저장
  sessionStorage.setItem('prevPage', currentPage || '1');

  const pageSize = usePageSize('forSale');
  const {
    data: { list: productList, totalCount },
  } = useProductsQuery({ page: currentPage, size: pageSize, order, keyword });

  return (
    <StyledForSaleProductContainer>
      <StyledForSaleProductsSection>
        {productList.map(({ id, name, price, images, favoriteCount }: IProduct) => (
          <Product key={id} id={id} name={name} images={images} price={price} favoriteCount={favoriteCount} />
        ))}
      </StyledForSaleProductsSection>
      <Pagination currentPage={Number(currentPage)} totalCount={totalCount} setSearchParams={setSearchParams} />
    </StyledForSaleProductContainer>
  );
}

export default ForSaleProductList;

const StyledForSaleProductContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledForSaleProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: start;
  column-gap: 2.4rem;
  row-gap: 4rem;

  @media (max-width: ${TABLET_MAX_WIDTH}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
