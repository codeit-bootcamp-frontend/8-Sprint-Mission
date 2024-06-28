import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: ${({ mt }) => mt + "px"};
  margin-bottom: ${({ mb }) => mb + "px"};
  @media (max-width: 1199px) {
    width: 696px;
  }
  @media (max-width: 767px) {
    width: 344px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex};
  justify-content: ${({ content }) => content};
  align-items: ${({ item }) => item};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => gap + "px"};
  margin-top: ${({ mt }) => mt + "px"};
  padding-left: ${({ pl }) => pl + "px"};
`;

export const None = styled.div`
  display: none;
`;
