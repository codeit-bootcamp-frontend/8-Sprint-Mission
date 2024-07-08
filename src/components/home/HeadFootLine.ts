import { styled } from "styled-components";

export const HeadFootLine = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-color);
  @media (width < 1200px) {
    padding: 0;
    overflow: hidden;
  }
`;

export const HeadFootLineContent = styled.div`
  max-width: 120rem;
  min-height: 54rem;
  margin: auto;
  display: flex;
  justify-content: center;
  & img {
    display: block;
    object-fit: scale-down;
    align-self: end;
    width: 70%;
    padding-top: 7.5rem;
  }

  @media (width < 1200px) {
    margin-top: 10rem;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    & img {
      width: 160%;
      align-self: center;
      object-fit: fill;
    }
  }
  @media (width < 768px) {
    & img {
      width: 160%;
    }
  }
`;

export const HeadFootLineTitle = styled(HeadFootLine)`
  max-width: 38.4rem;
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  word-break: keep-all;
  gap: 3.2rem;

  @media (width < 1200px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }
  @media (width < 768px) {
    max-width: 40rem;
  }
`;
