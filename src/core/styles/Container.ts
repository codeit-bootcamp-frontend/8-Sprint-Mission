import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  gap: 6.4rem;

  & img {
    width: 50%;
  }

  @media (width < 1200px) {
    flex-direction: column;
    align-items: start;
    gap: 3rem;
    padding: 0 2.4rem 6rem;
    & img {
      display: inline-block;
      width: 100%;
    }
  }
  @media (width < 768px) {
    padding: 0 1.6rem;
    gap: 2rem;
  }
`;

export const ContainerContent = styled.div`
  max-width: 29rem;
  display: flex;
  margin: auto 0;
  flex-direction: column;
  word-break: keep-all;
  gap: 1.2rem;

  @media (width < 1200px) {
    max-width: 100%;
  }
`;

export const ContainerTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  letter-spacing: 8%;

  @media (width < 1200px) {
    max-width: 100%;
    font-size: 3.2rem;
    line-height: 4.48rem;
    letter-spacing: 2%;
  }
  @media (width < 768px) {
    font-size: 2.4rem;
    line-height: 3.36rem;
  }
`;

export const ContainerDescription = styled.p`
  font-size: 2.4rem
  line-height: 2.88rem;
  letter-spacing: 8%;
  
  @media (width < 1200px) {
    max-width: 22rem;
    font-size: 1.8rem;
  }
  @media (width < 768px) {
    font-size: 1.6rem;
    line-height: 1.92rem;
  }
`;

export const ContainerCategory = styled.p`
  font-size: 1.8rem;
  color: var(--main-color);
  font-weight: 700;
  @media (width < 768px) {
    font-size: 1.6rem;
    line-height: 2.24rem;
  }
`;
