import styled from "styled-components";
import { MainContentDetails, Align } from "pages/HomePage";

interface MainContentProps {
  contentDetails: MainContentDetails;
}

interface StyledProps {
  $align: Align;
}

const StyledMainContentContainer = styled.section<StyledProps>`
  display: flex;
  gap: 64px;
  padding: 138px 0;
  margin: 0 auto;
  width: 1200px;
  height: 720px;
  flex-direction: ${({ $align }) => ($align === "right" ? "row-reverse" : "")};

  @media ${({ theme }) => theme.device.tablet} {
    width: auto;
    height: auto;
    gap: 20px;
    flex-direction: column;
    padding: 0;
    margin: 24px 24px 52px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: auto;
    height: auto;
    gap: 20px;
    flex-direction: column;
    padding: 0;
    margin: 52px 16px 40px;
  }
`;

const StyleMainContentImg = styled.img`
  display: block;
  width: 558px;
  height: 444px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: auto;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: auto;
  }
`;

const StyledMainTextContentArea = styled.div<StyledProps>`
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${({ $align }) => ($align === "right" ? "right" : "left")};
`;

const StyledMainContentTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brandBlue};

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
  }
`;

const StyledMainContent = styled.p`
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
  color: ${({ theme }) => theme.colors.gray700};
  margin: 12px 0 24px;

  @media ${({ theme }) => theme.device.tablet} {
    white-space: nowrap;
    font-size: 32px;
    line-height: 45px;
    margin-top: 16px 0 24px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    white-space: nowrap;
    font-size: 24px;
    line-height: 34px;
    margin: 8px 0 14px;
  }
`;

const StyledSubContent = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.gray700};

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 18px;
    line-height: 25px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
    line-height: 19px;
  }
`;

function MainContent({ contentDetails }: MainContentProps) {
  const { imgSrc, title, mainContent, subContent, align = "left" } = contentDetails;
  return (
    <StyledMainContentContainer $align={align}>
      <StyleMainContentImg src={imgSrc} alt={`${title} 이미지`} />
      <StyledMainTextContentArea $align={align}>
        <StyledMainContentTitle>{title}</StyledMainContentTitle>
        <StyledMainContent>{mainContent}</StyledMainContent>
        <StyledSubContent>{subContent}</StyledSubContent>
      </StyledMainTextContentArea>
    </StyledMainContentContainer>
  );
}

export default MainContent;
