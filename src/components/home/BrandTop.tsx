import Button from 'components/@shared/Button';
import BrandContainer from './BrandContainer';
import brandTopImg from 'assets/images/home/home_top.png';
import styled from 'styled-components';

function BrandTop() {
  return (
    <BrandContainer>
      <StyledBrandTop className={'container'}>
        <div className={'text-wrapper top'}>
          <h1>일상의 모든 물건을 거래해 보세요</h1>
          <Button>구경하러 가기</Button>
        </div>
        <img className={'brand-image'} src={brandTopImg} alt="인사하는 판다 이미지" />
      </StyledBrandTop>
    </BrandContainer>
  );
}

export default BrandTop;

const StyledBrandTop = styled.div`
  & button {
    width: 35.7rem;
    height: 5.6rem;
    margin-top: 3.2rem;
    border-radius: 4rem;
    background-color: var(--brand-blue);
    color: var(--white);

    font-size: 2rem;
    font-weight: 600;
    line-height: 2.4rem;
    text-align: center;
  }

  & img.brand-image {
    width: 99.6rem;
    height: 44.7rem;
  }

  @media all and (max-width: 1199px) {
    & .top {
      padding: 8.4rem 0 10rem;
    }
  }
`;
