import Button from 'components/@shared/Button';
import BrandContainer from './BrandContainer';
import brandTopImg from 'assets/images/home/home_top.png';
import styled from 'styled-components';
import useNavigateTo from 'hooks/useNavigateTo';
import Image from 'components/@shared/Image';
import { PATH_ITEMS } from ' constants/paths/paths';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from ' constants/infomations/mediaQuerySize';

function BrandTop() {
  const { navigateTo } = useNavigateTo();
  return (
    <BrandContainer>
      <StyledBrandTop className={'top'}>
        <h1>{'일상의 모든 물건을\n거래해 보세요'}</h1>
        <Button
          width={'35.7rem'}
          height={'5.6rem'}
          $category={'large'}
          onClick={() => navigateTo(`${PATH_ITEMS}?page=1`)}>
          구경하러 가기
        </Button>
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

  @media all and (max-width: ${TABLET_MAX_WIDTH}px) {
    padding: 8.4rem 0 10rem;
    align-items: center;
  }

  @media all and (max-width: ${MOBILE_MAX_WIDTH}px) {
    button {
      width: 15.4rem;
      height: 4.8rem;

      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.909rem;
    }
  }
`;
