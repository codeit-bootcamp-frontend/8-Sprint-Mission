import { styled } from "styled-components";

export const Section = styled.section`
  margin: 2.4rem auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media (width < 1200px) {
    align-items: center;
    margin: 1rem 2.4rem;
    justify-content: center;
  }
`;
