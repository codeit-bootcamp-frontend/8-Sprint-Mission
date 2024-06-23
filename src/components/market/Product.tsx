import styled from 'styled-components';
import Image from 'components/@shared/Image';
import likeIcon from 'assets/images/market/like-icon.png';

function Product() {
  return (
    <StyledProductArticle>
      <Image
        src={
          'https://mblogthumb-phinf.pstatic.net/MjAyNDAxMDJfMTMy/MDAxNzA0MTg1OTA2MDEz.Zs4YT9ywyEAZMKW4kJQa48ZyEgvmMXF3c19jkAmZE50g.eek_4eu_3L6jblWE9Z71TEwedVQSBC9HyVgVBCWtwm0g.JPEG.infinity0219/output_755709828.jpg?type=w800'
        }
        alt={'상품 이미지'}
        height={'28.2rem'}
        width={'28.2rem'}
        radius={'1.6rem'}
      />
      <StyledProductInfoWrapper>
        <h4>아이패드 미니 팝니다</h4>
        <h5>500,000원</h5>
        <small>
          <i>
            <Image src={likeIcon} alt={'좋아요 아이콘'} height={'1.165rem'} width={'1.34rem'} />
          </i>
          800
        </small>
      </StyledProductInfoWrapper>
    </StyledProductArticle>
  );
}

export default Product;

const StyledProductArticle = styled.article`
  height: 36.2rem;
  width: 28.2rem;
`;
const StyledProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
  margin-top: 1.6rem;

  & h4 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.671rem;
  }
  & h5 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.909rem;
  }
  & small {
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 500;
    color: var(--cool-gray-600);

    & i {
      margin-right: 0.133rem;
    }
  }
`;
