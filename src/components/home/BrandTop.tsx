import Button from 'components/@shared/Button';
import BrandContainer from './BrandContainer';
import brandTopImg from 'assets/images/home/home_top.png';
import styled from 'styled-components';
import Image from 'components/@shared/Image';
import { PATH_ITEMS } from ' constants/paths/paths';
import { MEDIA_QUERY_SIZE } from ' constants/information/mediaQuerySize';
import { Link } from 'react-router-dom';

function BrandTop() {
  return (
    <BrandContainer>
      <StyledBrandTop className={'top'}>
        <h1>{'일상의 모든 물건을\n거래해 보세요'}</h1>
        <Link to={`${PATH_ITEMS}?page=1`}>
          <Button width={'35.7rem'} height={'5.6rem'} $category={'large'}>
            구경하러 가기
          </Button>
        </Link>
      </StyledBrandTop>
      <Image height={'44.7rem'} width={'99.6rem'} src={brandTopImg} alt="인사하는 판다 이미지" />
    </BrandContainer>
  );
}

export default BrandTop;

const StyledBrandTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media ${MEDIA_QUERY_SIZE.underTablet} {
    padding: 8.4rem 0 10rem;
    align-items: center;
  }

  @media ${MEDIA_QUERY_SIZE.mobile} {
    button {
      width: 15.4rem;
      height: 4.8rem;

      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.909rem;
    }
  }
`;
