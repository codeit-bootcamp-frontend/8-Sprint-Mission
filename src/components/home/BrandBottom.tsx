import BrandContainer from './BrandContainer';
import brandBottomImg from 'assets/images/home/home_bottom.png';
import styled from 'styled-components';

function BrandBottom() {
  return (
    <BrandContainer>
      <StyledBrandBottom className={'container'}>
        <div className={'text-wrapper bottom'}>
          <h1>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h1>
        </div>
        <img className={'brand-image'} src={brandBottomImg} alt="웃으며 헤어지는 판다 2마리 이미지" />
      </StyledBrandBottom>
    </BrandContainer>
  );
}

export default BrandBottom;

const StyledBrandBottom = styled.div`
  & img.brand-image {
    width: 99.6rem;
    height: 54rem;
  }

  @media all and (max-width: 1199px) {
    & .bottom {
      padding: 12.1rem 0 5.9rem;
    }
  }
`;
