import styled from "styled-components";

interface BoxProps {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

export const Box = styled.div<BoxProps>`
  margin-top: ${({ mt = 0 }) => mt + "px"};
  margin-bottom: ${({ mb = 0 }) => mb + "px"};
  margin-left: ${({ ml = 0 }) => ml + "px"};
  margin-right: ${({ mr = 0 }) => mr + "px"};
  padding-top: ${({ pt }) => pt + "px"};
  padding-bottom: ${({ pb }) => pb + "px"};
  padding-left: ${({ pl }) => pl + "px"};
  padding-right: ${({ pr }) => pr + "px"};
`;

export const Container = styled(Box)<Pick<BoxProps, "mt">>`
  width: 1200px;
  margin: 0 auto;
  margin-top: ${({ mt }) => mt + "px"};
  @media (max-width: 1199px) {
    width: 696px;
  }
  @media (max-width: 767px) {
    width: 344px;
  }
`;

interface FlexProps {
  flex?: string;
  content?: string;
  item?: string;
  wrap?: string;
  gap?: string;
  mt?: string;
  pl?: string;
}

export const Flex = styled.div<FlexProps>`
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
