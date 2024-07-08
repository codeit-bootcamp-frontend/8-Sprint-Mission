import { styled } from "styled-components";
import { Section } from "core/styles/Section";

export const MainSection = styled(Section)`
  max-width: 120rem;
  min-height: 72rem;

  @media (width < 1200px) {
    min-height: 0;
    padding: 0;
    margin: 0;
    margin-top: 10rem;
  }
`;
