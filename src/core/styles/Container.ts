import { styled } from "styled-components";

export const Container = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  gap: 6.4rem;

  & img {
    width: 50%;
  }
`;

export const ContainerContent = styled(Container)`
  max-width: 29rem;
  display: flex;
  margin: auto 0;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContainerTitle = styled(Container)`
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  word-break: keep-all;
  letter-spacing: 0.08rem;
`;

export const ContainerDescription = styled(Container)`
  font-size: 2.4rem
  line-height: 2.88rem;
  letter-spacing: 8%;
`;

export const ContainerCategory = styled(Container)`
  font-size: 1.8rem;
  color: var(--main-color);
  font-weight: 700;
`;
