import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainTopDetails } from "pages/HomePage";

const StyledMainTopBackground = styled.section`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
`;

const StyledMainTopContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1200px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: 771px;
    justify-content: flex-start;
    padding-top: 84px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    justify-content: flex-start;
    padding-top: 48px;
  }
`;

const StyledMainTopDetailsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
  }

  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
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
    white-space: nowrap;
    margin-bottom: 24px;
    text-align: center;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 32px;
    line-height: 45px;
    margin-bottom: 18px;
    text-align: center;
  }
`;

const StyledMainTopBtn = styled.button`
  width: 357px;
  height: 56px;
  margin: 0 auto;
  border: none;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.gray00};
  background-color: ${({ theme }) => theme.colors.brandBlue};
  text-align: center;
  font-size: 20px;
  font-weight: 600;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
    width: 154px;
    height: 48px;
    margin-bottom: 32px;
  }
`;

const StyledMainTopImg = styled.img`
  display: block;
  width: 996px;
  height: 447px;
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
    width: 626px;
    height: 281px;
  }
`;

interface MainTopProps {
  contentDetails: MainTopDetails;
}

function MainTop({ contentDetails }: MainTopProps) {
  const { imgSrc, mainContent, buttonContent } = contentDetails;
  return (
    <StyledMainTopBackground>
      <StyledMainTopContainer>
        <StyledMainTopDetailsArea>
          <StyledParagraph>{mainContent}</StyledParagraph>
          <Link to="/items">
            <StyledMainTopBtn>{buttonContent}</StyledMainTopBtn>
          </Link>
        </StyledMainTopDetailsArea>
        <StyledMainTopImg src={imgSrc} alt="홈페이지 상단 이미지" />
      </StyledMainTopContainer>
    </StyledMainTopBackground>
  );
}

export default MainTop;
