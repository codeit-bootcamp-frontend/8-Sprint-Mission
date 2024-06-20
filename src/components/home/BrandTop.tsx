import Button from 'components/@shared/Button';
import BrandContainer from './BrandContainer';
import brandTopImg from 'assets/images/home/home_top.png';
import styled from 'styled-components';
import useNavigateTo from 'hooks/useNavigateTo';
import Image from 'components/@shared/Image';

function BrandTop() {
  const { navigateTo } = useNavigateTo();
  return (
    <BrandContainer>
      <div className={'container'}>
        <StyledBrandTop className={'top'}>
          <h1>{'일상의 모든 물건을\n거래해 보세요'}</h1>
          <Button width={'35.7rem'} height={'5.6rem'} type={'large'} onClick={() => navigateTo('/items')}>
            구경하러 가기
          </Button>
        </StyledBrandTop>
        <Image height={'44.7rem'} width={'99.6rem'} src={brandTopImg} alt="인사하는 판다 이미지" />
      </div>
    </BrandContainer>
  );
}

export default BrandTop;

const StyledBrandTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media all and (max-width: 1199px) {
    padding: 8.4rem 0 10rem;
    align-items: center;
  }
`;
