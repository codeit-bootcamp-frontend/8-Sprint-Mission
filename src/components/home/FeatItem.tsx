import styled from 'styled-components';
import Image from 'components/@shared/Image';
import { IBrandFeatureItem } from 'types/brandFeatureItemTypes';

function FeatItem({ src, alt, title, description, detail }: Omit<IBrandFeatureItem, 'id'>) {
  return (
    <StyledFeatItemContainer>
      <Image src={src} alt={alt} height={'44.4rem'} width={'58.8rem'} radius={'1.2rem'} />
      <StyledFeatTextWrapper>
        <h6>{title}</h6>
        <h1>{description}</h1>
        <h2>{detail}</h2>
      </StyledFeatTextWrapper>
    </StyledFeatItemContainer>
  );
}

export default FeatItem;

const StyledFeatItemContainer = styled.figure`
  height: 72rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.4rem;

  @media all and (max-width: 1199px) {
    flex-direction: column;

    height: 100%;
    width: 100%;
    margin: 2.4rem auto 8rem;
    padding: 0 1.5rem;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledFeatTextWrapper = styled.div`
  /* pre-line:
    연속 공백을 하나로 합침
    줄바꿈은 개행 문자와 요소에서 일어나며,
    한 줄이 너무 길어서 넘칠 경우 자동으로 줄을 바꿈 */
  white-space: pre-line;

  @media all and (max-width: 1199px) {
    width: 100%;
    :not(h2) {
      white-space: normal;
    }
  }

  & h6 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.52rem;
    color: var(--brand-blue);
    margin-bottom: 1.2rem;
    @media all and (min-width: 375px) and (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 2.24rem;
    }
  }
  & h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 5.6rem;
    letter-spacing: 0.2rem;
    color: var(--cool-gray);
    margin-bottom: 2.4rem;
    @media all and (min-width: 768px) and (max-width: 1199px) {
      font-size: 3.2rem;
      line-height: 4.48rem;
    }
    @media all and (min-width: 375px) and (max-width: 767px) {
      font-size: 2.4rem;
      line-height: 3.36rem;
    }
  }
  & h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.88rem;
    letter-spacing: 0.3rem;
    color: var(--cool-gray);
    @media all and (min-width: 768px) and (max-width: 1199px) {
      font-size: 1.8rem;
      line-height: 2.16rem;
    }
    @media all and (min-width: 375px) and (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 1.92rem;
    }
  }
`;
