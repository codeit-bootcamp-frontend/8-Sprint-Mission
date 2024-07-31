import styled from 'styled-components';
import hotItemImage from '../../../../images/Img_home_01.png';
import searchImage from '../../../../images/Img_home_02.png';
import registerImage from '../../../../images/Img_home_03.png';

function Main() {
  return (
    <MainWrapper>
      <SectionWrapper>
        <ContentWrapper>
          <ImageBox style={{ backgroundImage: `url(${hotItemImage})` }} />
          <TextBox>
            <h3>Hot item</h3>
            <h1>
              인기 상품을
              <br />
              확인해 보세요
            </h1>
            <p>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </TextBox>
        </ContentWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <ContentWrapper>
          <TextBox right>
            <h3>Search</h3>
            <h1>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h1>
            <p>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </TextBox>
          <ImageBox style={{ backgroundImage: `url(${searchImage})` }} />
        </ContentWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <ContentWrapper>
          <ImageBox style={{ backgroundImage: `url(${registerImage})` }} />
          <TextBox>
            <h3>Register</h3>
            <h1>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h1>
            <p>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </TextBox>
        </ContentWrapper>
      </SectionWrapper>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  height: 2160px;
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  height: 444px;
  display: flex;
  align-items: center;
  gap: 64px;
  background-color: var(--background-gray);
`;

const ImageBox = styled.div`
  width: 588px;
  height: 444px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextBox = styled.div`
  height: 238px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: ${({ right }) => (right ? 'right' : 'left')};

  & h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--blue);
  }

  & h1 {
    font-weight: 700;
    font-size: 40px;
    color: var(--gray700);
  }

  & p {
    font-weight: 500;
    font-size: 24px;
    color: var(--gray700);
  }
`;
