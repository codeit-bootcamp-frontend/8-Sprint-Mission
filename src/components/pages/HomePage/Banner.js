import styled from 'styled-components';
import bannerTopImage from '../../../images/Img_home_top.png';
import bannerBottomImage from '../../../images/Img_home_bottom.png';

function Banner({ bottom }) {
  return (
    <BannerWrapper>
      <ContentWrapper>
        <ContentLeft>
          <p>
            {bottom ? (
              <>
                믿을 수 있는
                <br />
                판다마켓 중고거래
              </>
            ) : (
              <>
                일상의 모든 물건을
                <br />
                거래해 보세요
              </>
            )}
          </p>
          {!bottom && <ItemsButton>구경하러 가기</ItemsButton>}
        </ContentLeft>
        <ContentRight bottom={bottom} />
      </ContentWrapper>
    </BannerWrapper>
  );
}

export default Banner;

const BannerWrapper = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: var(--background-blue);
`;

const ContentWrapper = styled.div`
  width: 1110px;
  height: 340px;
  display: flex;
  align-items: center;
`;

const ContentLeft = styled.div`
  width: 357px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  & p {
    color: var(--gray700);
    font-weight: 700;
    font-size: 40px;
  }
`;

const ContentRight = styled.div`
  width: 746px;
  height: 340px;
  background-image: url(${({ bottom }) =>
    bottom ? bannerBottomImage : bannerTopImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ItemsButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  color: var(--white);
  font-weight: 600;
  font-size: 20px;
`;
