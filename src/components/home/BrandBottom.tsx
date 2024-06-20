import BrandContainer from './BrandContainer';
import brandBottomImg from 'assets/images/home/home_bottom.png';
import Image from 'components/@shared/Image';
import styled from 'styled-components';

function BrandBottom() {
  return (
    <BrandContainer>
      <div className={'container'}>
        <StyledBrandBottom className={'bottom'}>
          <h1>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h1>
        </StyledBrandBottom>
        <Image height={'54rem'} width={'99.6rem'} src={brandBottomImg} alt="웃으며 헤어지는 판다 2마리 이미지" />
      </div>
    </BrandContainer>
  );
}

export default BrandBottom;

const StyledBrandBottom = styled.div`
  @media all and (max-width: 1199px) {
    padding: 12.1rem 0 5.9rem;
  }
`;
