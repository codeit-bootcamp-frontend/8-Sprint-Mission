import styled from "styled-components";
import { Details } from "pages/HomePage";

const StyledMainBottomBackground = styled.section`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  margin-top: 138px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 80px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 83px;
  }
`;

const StyledMainBottomContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1200px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: 927px;
    justify-content: flex-start;
    padding-top: 201px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    justify-content: flex-start;
    padding-top: 121px;
  }
`;

const StyledParagraph = styled.p`
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.device.tablet} {
    text-align: center;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 32px;
    line-height: 45px;
    text-align: center;
  }
`;

const StyledMainBottomImg = styled.img`
  display: block;
  width: 996px;
  height: 540px;
  position: absolute;
  bottom: 0;
  right: -137px;

  @media ${({ theme }) => theme.device.tablet} {
    left: 50%;
    transform: translate(-50%);
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 50%;
    transform: translate(-50%);
    width: 498px;
    height: 270px;
  }
`;

interface MainBottomProps {
  contentDetails: Details;
}

function MainBottom({ contentDetails }: MainBottomProps) {
  const { imgSrc, mainContent } = contentDetails;
  return (
    <StyledMainBottomBackground>
      <StyledMainBottomContainer>
        <StyledParagraph>{mainContent}</StyledParagraph>
        <StyledMainBottomImg src={imgSrc} alt="홈페이지 하단 이미지" />
      </StyledMainBottomContainer>
    </StyledMainBottomBackground>
  );
}

export default MainBottom;
